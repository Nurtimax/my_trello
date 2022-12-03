import React from "react";
import { TrelloCardListMenuStyled } from "../../assets/Global";

const TrelloCardListMenu = ({ removeCard, editCard }) => {
  const editCardValueHandler = () => {
    editCard();
  };

  const deleteCardHandler = () => {
    removeCard();
  };

  return (
    <TrelloCardListMenuStyled>
      <button className="button" onClick={deleteCardHandler}>
        Delete
      </button>
      <button className="button" onClick={editCardValueHandler}>
        Edit
      </button>
    </TrelloCardListMenuStyled>
  );
};

export default React.memo(TrelloCardListMenu);
