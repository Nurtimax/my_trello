import React from "react";
import { AddListStyled } from "../../assets/Global";
import { BsPlusLg } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../store/reducers/modalReducer";
import AddListModal from "./AddListModal";

const AddList = (props) => {
  const dispatch = useDispatch();
  const { isShowModal } = useSelector((state) => state.modal);

  const showModalHandler = () => {
    dispatch(showModal());
  };

  return (
    <AddListStyled>
      {isShowModal && <AddListModal />}
      <button className="button" onClick={showModalHandler}>
        <BsPlusLg /> Add list
      </button>
    </AddListStyled>
  );
};

export default AddList;
