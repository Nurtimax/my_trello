import React, { useReducer } from "react";
import { TrelloCardListStyled } from "../../assets/Global";
import { GoKebabHorizontal } from "react-icons/go";
import TrelloCardListMenu from "./TrelloCardListMenu";
import axios from "axios";
import { BASE_URL } from "../../utils/constants/general";
import { useDispatch } from "react-redux";
import { getDataHandler } from "../../store/reducers/trelloReducer";

const initialState = {
  showModal: false,
  editCard: true,
};

const cardListReducer = (state, { type, payload }) => {
  switch (type) {
    case "MODAL":
      return {
        ...state,
        showModal: !state.showModal,
      };

    case "EDIT":
      return {
        ...state,
        editCard: !state.editCard,
      };

    case "TITLE":
      return {
        ...state,
        title: payload,
      };

    default:
      return state;
  }
};

const TrelloCardList = ({ title, id, editTitle, editSlice }) => {
  const [viewEdit, dispatchViewEdit] = useReducer(cardListReducer, {
    ...initialState,
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

  const saveEditCardHandler = async () => {
    try {
      const response = await axios.put(
        `${BASE_URL}/card_${editTitle.toLowerCase()}_${editSlice.toLowerCase()}/${id}.json`,
        {
          title: viewEdit.title,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    dispatch(getDataHandler(editTitle, editSlice));
    editModalHandler();
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
          <button className="button save_button" onClick={saveEditCardHandler}>
            Save
          </button>
        </>
      )}

      {viewEdit.showModal && (
        <TrelloCardListMenu
          id={id}
          editCard={editModalHandler}
          title={editTitle}
          titleSlice={editSlice}
        />
      )}
    </TrelloCardListStyled>
  );
};

export default TrelloCardList;
