import React from "react";
import { useSelector } from "react-redux";
import { Container, ListStyled } from "../assets/Global";
import TrelloCard from "../components/trello_card/TrelloCard";

const List = ({ title, backgroundImage, page, id }) => {
  const { data } = useSelector((state) => state.signup);
  console.log(data, "data");

  return (
    <ListStyled image={backgroundImage} bgColor={backgroundImage}>
      <Container>
        <div className="list_card">
          {page.map((item) => (
            <TrelloCard key={item.id} trelloId={id} {...item}>
              {item.title}
            </TrelloCard>
          ))}
        </div>
      </Container>
    </ListStyled>
  );
};

export default List;
