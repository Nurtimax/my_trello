import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddListModalFormStyled } from "../../assets/Global";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";

const AddListModalForm = ({ sendData }) => {
  const [cardValue, setCardValue] = useState("");

  const navigated = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (cardValue.trim().length !== 0) {
      sendData(cardValue);
      return navigated(`/lists/${cardValue.toLowerCase()}`);
    }
  };

  return (
    <AddListModalFormStyled onSubmit={submitHandler}>
      <Input
        label="Enter your card"
        value={cardValue}
        onChange={(e) => setCardValue(e.target.value)}
      />
      <Button>Create</Button>
    </AddListModalFormStyled>
  );
};

export default AddListModalForm;
