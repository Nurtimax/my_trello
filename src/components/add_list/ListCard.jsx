import React from "react";
import { useNavigate } from "react-router-dom";
import { ListCardStyled } from "../../assets/Global";

const ListCard = ({ children, image }) => {
  const navigateCard = useNavigate();

  const navigatePathHandler = () => {
    return navigateCard(`/lists/${children.toLowerCase()}`);
  };

  return (
    <ListCardStyled image={image} bgColor={image} onClick={navigatePathHandler}>
      <h2>{children}</h2>
    </ListCardStyled>
  );
};

export default ListCard;
