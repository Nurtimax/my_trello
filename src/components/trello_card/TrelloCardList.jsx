import React, { useReducer } from "react";
import { TrelloCardListStyled } from "../../assets/Global";
import { GoKebabHorizontal } from "react-icons/go";
import TrelloCardListMenu from "./TrelloCardListMenu";
import { cardListReducer, initialStateCard } from "../../utils/valueReducer";
import { useDispatch } from "react-redux";
import { deleteCard, editCard } from "../../store/reducers/signupReducer";

const TrelloCardList = ({
  title,
  id,
  editTitle,
  editSlice,
  trelloId,
  pageId,
}) => {
  const [viewEdit, dispatchViewEdit] = useReducer(cardListReducer, {
    ...initialStateCard,
    title,
  });

  const dispatch = useDispatch();

  const showModalHandler = () => {
    dispatchViewEdit({ type: "MODAL" });
  };

  const editModalHandler = () => {
    dispatchViewEdit({ type: "EDIT" });
  };

  const changeCardValueHandler = (key) => {
    return (e) => {
      dispatchViewEdit({ type: key, payload: e.target.value });
    };
  };

  const saveCardValueHandler = () => {
    dispatch(
      editCard({ trelloId, pageId, cardId: id, newTitle: viewEdit.title })
    );
    editModalHandler();
  };

  const removeCardValueHandler = () => {
    dispatch(deleteCard({ trelloId, pageId, cardId: id }));
  };

  return (
    <TrelloCardListStyled>
      {viewEdit.editCard ? (
        <>
          <div>{title}</div>
          <button className="button" onClick={showModalHandler}>
            <GoKebabHorizontal />
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={viewEdit.title}
            onChange={changeCardValueHandler("TITLE")}
          />
          <button className="button save_button" onClick={saveCardValueHandler}>
            Save
          </button>
        </>
      )}

      {viewEdit.showModal && (
        <TrelloCardListMenu
          removeCard={removeCardValueHandler}
          editCard={editModalHandler}
        />
      )}
    </TrelloCardListStyled>
  );
};

export default TrelloCardList;
