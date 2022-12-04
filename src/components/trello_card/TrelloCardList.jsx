import React, { useReducer } from "react";
import { TrelloCardListStyled } from "../../assets/Global";
import { GoKebabHorizontal } from "react-icons/go";
import TrelloCardListMenu from "./TrelloCardListMenu";
import { cardListReducer, initialStateCard } from "../../utils/valueReducer";
import { useDispatch, useSelector } from "react-redux";
import { deleteCard, editCard } from "../../store/reducers/signupReducer";
import TrelloCardListModal from "./TrelloCardListModal";
import { toggleDescriptionModal } from "../../store/reducers/modalReducer";

const TrelloCardList = ({
  title,
  id,
  editTitle,
  editSlice,
  trelloId,
  pageId,
  listName
}) => {
  const [viewEdit, dispatchViewEdit] = useReducer(cardListReducer, {
    ...initialStateCard,
    title,
  });

  const dispatch = useDispatch();

  const { descriptionModal } = useSelector((state) => state.modal);

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
      {descriptionModal && <TrelloCardListModal title={title} listName={listName} />}
      {viewEdit.editCard ? (
        <>
          <div
            className="card_title"
            onClick={() => dispatch(toggleDescriptionModal())}
          >
            {title}
          </div>
          <button className="button menu_button" onClick={showModalHandler}>
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
