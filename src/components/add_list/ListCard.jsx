import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ListCardStyled } from "../../assets/Global";
import { removeTrelloCardList } from "../../store/reducers/signupReducer";
import ListCardItem from "./ListCardItem";

const ListCard = ({ children, image, id }) => {
  const [editTitle, setEditTitle] = useState(false);

  const navigateCard = useNavigate();
  const dispatch = useDispatch();

  const navigatePathHandler = () => {
    return navigateCard(`/lists/${children.toLowerCase()}`);
  };

  const removeCardHandler = () => {
    dispatch(removeTrelloCardList(id));
  };

  const editCardHandler = () => {
    setEditTitle((prevState) => !prevState);
  };

  return (
    <>
      <ListCardStyled image={image} bgColor={image}>
        {!editTitle && (
          <header className="header">
            <button className="button" onClick={removeCardHandler}>
              delete
            </button>
            <button className="button" type="button" onClick={editCardHandler}>
              edit
            </button>
          </header>
        )}
        <ListCardItem children={children} id={id} editCard={editCardHandler} editTitle={editTitle} />
        <div className="content" onClick={navigatePathHandler}></div>
      </ListCardStyled>
    </>
  );
};

export default ListCard;
