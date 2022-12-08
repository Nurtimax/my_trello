import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter, Route, Routes } from "react-router-dom";
import DefinedPages from "./layouts/DefinedPages";
import Header from "./layouts/Header";
import Search from "./layouts/Search";
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


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeUser(""));
  }, [dispatch]);

  useEffect(() => {
    dispatch(putUserHandler(login.user));
  }, [dispatch, login.user, login.start]);

  useEffect(() => {
    dispatch(getUserHandler());
  }, [dispatch]);

  useEffect(() => {
    if (login.user) {
      dispatch(putUserDataHandler(signup, login.user)); 
    }
    return;
  }, [dispatch, signup, login.user]);

  useEffect(() => {
    if (login.user) {
      dispatch(addUserDataHandler(login.user)); 
    }
    return;
  }, [dispatch, login.user]);

  useEffect(() => {
    dispatch(getUserDataHandler(login.user));
  }, [dispatch, login.user]);

  return (
    <HashRouter basename="/">
      <Header />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
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
