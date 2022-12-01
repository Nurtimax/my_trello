import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { TrelloCardListMenuStyled } from "../../assets/Global";
import { getDataHandler } from "../../store/reducers/trelloReducer";
import { BASE_URL } from "../../utils/constants/general";

const TrelloCardListMenu = ({ id, editCard, title, titleSlice }) => {
  console.log(id);

  const dispatch = useDispatch();

  const removeCardHandler = async () => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/card_${title.toLowerCase()}_${titleSlice.toLowerCase()}/${id}.json`
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    dispatch(getDataHandler(title, titleSlice));
  };

  const editCardValueHandler = () => {
    editCard();
  };

  return (
    <TrelloCardListMenuStyled>
      <button className="button" onClick={removeCardHandler}>
        Delete
      </button>
      <button className="button" onClick={editCardValueHandler}>
        Edit
      </button>
    </TrelloCardListMenuStyled>
  );
};

export default React.memo(TrelloCardListMenu);
