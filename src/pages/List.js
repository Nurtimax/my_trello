import React from "react";
import { Container, ListStyled } from "../assets/Global";
import TrelloCard from "../components/trello_card/TrelloCard";

const List = ({ title, backgroundImage }) => {
  console.log(title, "title list");
  return (
    <ListStyled image={backgroundImage}>
      <Container>
        <div className="list_card">
          {[
            {
              id: 1,
              title,
            },
            {
              id: 2,
              title: "Done",
            },
            {
              id: 3,
              title: "list",
            },
            {
              id: 4,
              title: "task",
            },
            {
              id: 55,
              title: "form",
            },
          ].map((item) => (
            <TrelloCard title={title} key={item.id}>
              {item.title}
            </TrelloCard>
          ))}
        </div>
      </Container>
    </ListStyled>
  );
};

export default List;
