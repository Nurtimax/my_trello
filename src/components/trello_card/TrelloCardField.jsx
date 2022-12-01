import React, { useReducer } from "react";
import { BsPlusLg } from "react-icons/bs";

const initialState = {
  value: "",
};

const reducer = (state, { type, payload }) => {
  if (type === "TITLE") {
    return {
      value: payload,
    };
  }
  if (type === "RESET") {
    return {
      value: "",
    };
  }
  return state;
};

const TrelloCardField = ({ postData }) => {
  const [cardValue, dispatch] = useReducer(reducer, initialState);

  const submitHandler = (e) => {
    e.preventDefault();
    postData({ title: cardValue.value });
    dispatch({ type: "RESET" });
  };

  return (
    <form onSubmit={submitHandler}>
      <textarea
        value={cardValue.value}
        onChange={(e) => dispatch({ type: "TITLE", payload: e.target.value })}
        rows="4"
        className="textarea"
        placeholder="Enter a title for this card..."
      />
      <button className="button">
        <BsPlusLg /> Add list
      </button>
    </form>
  );
};

export default TrelloCardField;
