import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ErrorModalStyled } from "../../assets/Global";
import { loginHandler } from "../../store/reducers/loginReducer";
import Cart from "../UI/card/Card";

const ErrorModal = () => {
  const dispatch = useDispatch();

  const closeModalHandler = () => {
    dispatch(loginHandler());
  };

  const { error } = useSelector((state) => state.login);

  return (
    <ErrorModalStyled>
      <Cart className="error_cart">
        <div className="error_cart_header">
          <h1>{error.title}</h1>
        </div>
        <article className="error_cart_article">
          <div className="error_message">
            <h3>{error.message} </h3>
          </div>
          <div className="btns">
            <button onClick={closeModalHandler}>Try again</button>
          </div>
        </article>
      </Cart>
    </ErrorModalStyled>
  );
};

export default ErrorModal;
