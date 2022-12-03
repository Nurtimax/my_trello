import { useReducer } from "react";
import { BsPlusLg } from "react-icons/bs";
import { GoKebabHorizontal } from "react-icons/go";
import { useDispatch } from "react-redux";
import { TrelloCardStyled } from "../../assets/Global";
import { addList } from "../../store/reducers/signupReducer";
import Card from "../UI/card/Card";
import TrelloCardField from "./TrelloCardField";
import TrelloCardList from "./TrelloCardList";

const initialStateByCard = {
  modal: false,
  newList: "",
  addListModal: false,
};

const showCardFieldReducer = (state, { type, payload }) => {
  if (type === "TOGGLE") {
    return {
      ...state,
      modal: !state.modal,
    };
  }
  if (type === "LIST") {
    return {
      ...state,
      newList: payload,
    };
  }
  if (type === "RESET") {
    return {
      ...state,
      newList: "",
    };
  }
  if (type === "LISTMODAL") {
    return {
      ...state,
      addListModal: !state.addListModal,
    };
  }
  return state;
};

const TrelloCard = ({ title = "Todo", children, id, cards, trelloId }) => {
  const dispatch = useDispatch();

  const [isShowModal, dispatchIsShowModal] = useReducer(
    showCardFieldReducer,
    initialStateByCard
  );

  const showFiledHandler = () => {
    dispatchIsShowModal({ type: "TOGGLE" });
  };

  const addListCardHandler = () => {
    dispatch(
      addList({
        id: Math.random().toString(),
        title: isShowModal.newList,
        cards: [],
        trelloId,
      })
    );
    dispatchIsShowModal({ type: "LISTMODAL" });
    dispatchIsShowModal({ type: "RESET" });
  };

  const changeInputValueHandler = (type) => {
    return (e) => {
      dispatchIsShowModal({ type, payload: e.target.value });
    };
  };

  return (
    <TrelloCardStyled>
      {isShowModal.addListModal && (
        <div className="add_list_modal">
          <label htmlFor="name">
            List Name:{" "}
            <input
              type="text"
              value={isShowModal.newList}
              onChange={changeInputValueHandler("LIST")}
            />
          </label>{" "}
          <button onClick={addListCardHandler}>
            {" "}
            <BsPlusLg /> Add List
          </button>
        </div>
      )}
      <Card className="trello_card">
        <div className="trello_card_header">
          {children}{" "}
          <button
            className="button"
            onClick={() => dispatchIsShowModal({ type: "LISTMODAL" })}
          >
            <GoKebabHorizontal />
          </button>
        </div>
        {cards?.map((item) => (
          <TrelloCardList
            key={item.id}
            {...item}
            editTitle={title}
            editSlice={children}
            trelloId={trelloId}
            pageId={id}
          />
        ))}
        {!isShowModal.modal ? (
          <>
            <button className="button" onClick={showFiledHandler}>
              <BsPlusLg /> Add card
            </button>
          </>
        ) : (
          <>
            <TrelloCardField
              id={id}
              trelloId={trelloId}
              showFile={showFiledHandler}
            />
          </>
        )}
      </Card>
    </TrelloCardStyled>
  );
};

export default TrelloCard;
