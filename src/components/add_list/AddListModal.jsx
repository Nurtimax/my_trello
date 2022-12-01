import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddListModaltyled,
  BackgroundColorChoose,
  BackgroundColorsStyled,
} from "../../assets/Global";
import { background, backgroundColors } from "../../data";
import { chooseColor, chooseImage } from "../../store/reducers/modalReducer";
import { sendDataTrelloListHandler } from "../../store/reducers/trelloListReducer";
import AddListModalForm from "./AddListModalForm";

const AddListModal = () => {
  const dispatch = useDispatch();
  const chooseBackground = (image) => {
    return () => {
      dispatch(chooseImage(image));
    };
  };
  const chooseBackgroundColor = (color) => {
    return () => {
      dispatch(chooseColor(color));
    };
  };

  const { key, backgroundShow } = useSelector((state) => state.modal);

  const sendDataHandler = (data) => {
    dispatch(
      sendDataTrelloListHandler({
        backgroundImage: key || backgroundShow,
        title: data,
      })
    );
  };

  return (
    <AddListModaltyled>
      <div className="list_modal_header">Add list</div>
      <figure className="default_img">
        {backgroundShow ? (
          <BackgroundColorChoose
            className="background_img"
            backgroundShow={backgroundShow}
          ></BackgroundColorChoose>
        ) : (
          <img src={key} alt="bg" />
        )}
      </figure>
      <figure className="background_styled">
        {background.map((item) => (
          <img
            key={item.id}
            src={item.backgroundImage}
            alt={item.id}
            onClick={chooseBackground(item.backgroundImage)}
          />
        ))}
      </figure>
      <div className="choose_background_colors">
        {backgroundColors.map((item) => (
          <BackgroundColorsStyled
            key={item.id}
            isColor={item.backgroundColor}
            onClick={chooseBackgroundColor(item.backgroundColor)}
          ></BackgroundColorsStyled>
        ))}
      </div>
      <AddListModalForm sendData={sendDataHandler} />
    </AddListModaltyled>
  );
};

export default AddListModal;
