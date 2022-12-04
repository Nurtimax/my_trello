import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddListModalFormStyled } from "../../assets/Global";
import { createValid } from "../../store/reducers/loginReducer";
import { showModal } from "../../store/reducers/modalReducer";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";

const AddListModalForm = ({ sendData }) => {
  const [cardValue, setCardValue] = useState("");

  const navigated = useNavigate();

  const dispatch = useDispatch();

  const {
    signup: { data },
    login: { createListValid },
  } = useSelector((state) => state);

  const changeValueHandler = (e) => {
    setCardValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createValid(null));
    if (cardValue.trim().length !== 0) {
      for (let i = 0; i < data.trelloCardList.length; i++) {
        const element = data.trelloCardList[i];
        if (element.title === cardValue) {
          return dispatch(createValid("This name is already existing"));
        }
      }
      sendData(cardValue);
      dispatch(showModal());
      return navigated(`/lists/${cardValue.toLowerCase()}`);
    }
  };

  return (
    <AddListModalFormStyled onSubmit={submitHandler}>
      <Input
        label="Enter your card"
        value={cardValue}
        onChange={changeValueHandler}
        className={createListValid && "error_input"}
      />
      {createListValid && <p className="error_message">{createListValid}</p>}
      <Button>Create</Button>
    </AddListModalFormStyled>
  );
};

export default AddListModalForm;
