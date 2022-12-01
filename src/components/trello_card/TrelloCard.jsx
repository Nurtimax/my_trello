import axios from "axios";
import React, { useEffect } from "react";
import { BsPlusLg } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { TrelloCardStyled } from "../../assets/Global";
import { getDataHandler, showFiled } from "../../store/reducers/trelloReducer";
import { BASE_URL } from "../../utils/constants/general";
import Card from "../UI/card/Card";
import TrelloCardField from "./TrelloCardField";
import TrelloCardList from "./TrelloCardList";
import { toast } from "react-toastify";

const TrelloCard = ({ title = "Todo", children }) => {
  const {
    openFiled,
    [`${title.toLowerCase()}_${children.toLowerCase()}`]: items,
  } = useSelector((state) => state.trello);

  const dispatch = useDispatch();

  const showFiledHandler = () => {
    dispatch(showFiled());
  };

  const postCardData = async (data) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/card_${title.toLowerCase()}_${children.toLowerCase()}.json`,
        data
      );
      toast.success(`Succes ${response.status}`);
    } catch (error) {
      toast.error(error.message);
    }
    dispatch(getDataHandler(title, children));
  };

  useEffect(() => {
    dispatch(getDataHandler(title, children));
  }, [dispatch, title, children]);

  return (
    <TrelloCardStyled>
      <Card className="trello_card">
        <div className="trello_card_header">{children}</div>
        {items?.map((item) => (
          <TrelloCardList key={item.id} {...item} />
        ))}
        {!openFiled ? (
          <>
            <button className="button" onClick={showFiledHandler}>
              <BsPlusLg /> Add card
            </button>
          </>
        ) : (
          <>
            <TrelloCardField postData={postCardData} />
          </>
        )}
      </Card>
    </TrelloCardStyled>
  );
};

export default TrelloCard;
