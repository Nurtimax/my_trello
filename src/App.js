import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter, Route, Routes } from "react-router-dom";
import DefinedPages from "./layouts/DefinedPages";
import Home from "./pages/Home";
import List from "./pages/List";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import {
  changeUser,
  getUserDataHandler,
  getUserHandler,
  putUserHandler,
} from "./store/reducers/loginReducer";
import {
  addUserDataHandler,
  putUserDataHandler,
} from "./store/reducers/signupReducer";

function App() {
  const { signup, login } = useSelector((state) => state);

  console.log(signup);
  console.log(login);

  const dispatch = useDispatch();

  // useEffect(() => {
  //     dispatch(changeUser(login.user));
  // }, [dispatch, login.user]);

  useEffect(() => {
    if (login.start) {
      dispatch(putUserHandler(login.user));
    }
  }, [dispatch, login.user, login.start]);

 

  useEffect(() => {
      dispatch(addUserDataHandler(login.user)); // addUserDataHandler
  }, [dispatch, login.user]);

  useEffect(() => {
      dispatch(putUserDataHandler(signup, login.user));
  }, [dispatch, signup, login.user]);

  useEffect(() => {
    dispatch(getUserDataHandler(login.user));
  }, [dispatch, login.user]);

  useEffect(() => {
    dispatch(getUserHandler());
}, [dispatch]);

  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:id" element={<DefinedPages />} />
        <Route path="/home" element={<Home />} />
        {signup.data.trelloCardList.map((card) => (
          <Route
            key={card.id}
            path={`/lists/${card.title.toLowerCase()}`}
            element={<List {...card} />}
          />
        ))}
      </Routes>
    </HashRouter>
  );
}

export default App;
