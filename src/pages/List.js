import React from "react";
import { Container, ListStyled } from "../assets/Global";
import TrelloCard from "../components/trello_card/TrelloCard";

const List = ({ title, backgroundImage, page, id }) => {

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
