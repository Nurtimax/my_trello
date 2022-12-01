import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, ListsCardStyled } from "../assets/Global";
import AddList from "../components/add_list/AddList";
import ListCard from "../components/add_list/ListCard";
import { getDataTrelloListHandler } from "../store/reducers/trelloListReducer";

const Home = () => {
  const { cards } = useSelector((state) => state.trelloList);
  console.log(cards);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataTrelloListHandler());
  }, [dispatch]);

  return (
    <>
      <Container>
        <div>
          <AddList />
        </div>
        <ListsCardStyled>
          {cards.map((item) => (
            <ListCard key={item.id} image={item.backgroundImage}>
              {item.title}
            </ListCard>
          ))}
        </ListsCardStyled>
      </Container>
    </>
  );
};

export default Home;
