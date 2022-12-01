// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefinedPages from "./layouts/DefinedPages";
import Home from "./pages/Home";
import List from "./pages/List";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const {
    trelloList: { cards },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch();
  // }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:id" element={<DefinedPages />} />
        <Route path="/home" element={<Home />} />
        {cards.map((card) => (
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
