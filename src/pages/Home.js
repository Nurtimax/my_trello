import { useSelector } from "react-redux";
import { Container, ListsCardStyled } from "../assets/Global";
import AddList from "../components/add_list/AddList";
import ListCard from "../components/add_list/ListCard";

const Home = () => {
  const { data } = useSelector((state) => state.signup);

  return (
    <>
      <Container>
        <div>
          <AddList />
        </div>
        <ListsCardStyled>
          {data?.trelloCardList.map((item) => (
            <ListCard
              key={item.id || Math.random()}
              image={item.backgroundImage}
            >
              {item.title}
            </ListCard>
          ))}
        </ListsCardStyled>
      </Container>
    </>
  );
};

export default Home;
