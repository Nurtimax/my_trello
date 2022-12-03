import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefinedPages from "./layouts/DefinedPages";
import Home from "./pages/Home";
import List from "./pages/List";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { getUserDataHandler } from "./store/reducers/loginReducer";
import {
  addUserDataHandler,
  putUserDataHandler,
} from "./store/reducers/signupReducer";

function App() {
  const {
    signup: { data },
    modal,
  } = useSelector((state) => state);

  console.log(modal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addUserDataHandler());
  }, [dispatch]);

  useEffect(() => {
    dispatch(putUserDataHandler(data));
  }, [dispatch, data]);

  useEffect(() => {
    dispatch(getUserDataHandler());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:id" element={<DefinedPages />} />
        <Route path="/home" element={<Home />} />
        {data.trelloCardList.map((card) => (
          <Route
            key={card.id}
            path={`/lists/${card.title.toLowerCase()}`}
            element={<List {...card} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
