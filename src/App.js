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

  console.log(signup);
  console.log(login);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("change user");
    dispatch(changeUser(""));
  }, [dispatch]);

  useEffect(() => {
    console.log("put user ");
    dispatch(putUserHandler(login.user));
  }, [dispatch, login.user, login.start]);

  useEffect(() => {
    console.log("get user");
    dispatch(getUserHandler());
  }, [dispatch]);

  useEffect(() => {
    console.log("put user data");
    if (login.user) {
      dispatch(putUserDataHandler(signup, login.user));
    }
    return;
  }, [dispatch, signup, login.user]);

  useEffect(() => {
    if (login.user) {
      console.log(login.user, "is true add user");
      dispatch(addUserDataHandler(login.user)); // addUserDataHandler
    }
    return;
  }, [dispatch, login.user]);

  useEffect(() => {
    console.log("get user data ");
    if (login.user) {
      dispatch(getUserDataHandler(login.user));
    }
    return;
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
