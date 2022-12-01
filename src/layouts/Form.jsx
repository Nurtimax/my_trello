import React, { useReducer } from "react";
import { FormStyled } from "../assets/Global";
import { EMAIL, initState, PASSWORD } from "../utils/constants/general";
import { initialState, valueReducer } from "../utils/valueReducer";
import { MdOutlineAlternateEmail, MdPassword } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  loginHandler,
  showPasswordValue,
} from "../store/reducers/loginReducer";
import { useNavigate } from "react-router-dom";

const EMAIL_REGEX = /.+@.+\.[A-Za-z]+$/;
const PASSWORD_REGEX =
  /^([@#](?=[^aeiou]{2}$)(?=[[:alnum:]]{2}$)(?=.*[A-Z]{1,}.*$).+)$/;

const Form = () => {
  const [formValue, dispatchValue] = useReducer(valueReducer, initialState);

  const navigation = useNavigate()

  const dispatch = useDispatch();

  const { passwordView } = useSelector((state) => state.login);

  const changeValueInputHandler = (type) => {
    return (e) => {
      dispatchValue({ type, payload: e.target.value });
    };
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      !EMAIL_REGEX.test(formValue.email) &&
      !PASSWORD_REGEX.test(formValue.password)
    ) {
      return dispatch(
        loginHandler({
          title: "ERROR",
          message: "Please fill in the correct field",
        })
      );
    }
    for (const key in initState) {
      if (String(initState[key]) !== String(formValue[key])) {
        return dispatch(
          loginHandler({
            title: "ERROR",
            message: "Please fill in the correct field email or password",
          })
        );
      }
    }
    navigation('/home')
  };

  const showPasswordHandler = () => {
    console.log("show password is working");
    dispatch(showPasswordValue());
  };

  return (
    <FormStyled onSubmit={submitHandler}>
      <h2 className="h2">Вход в Trello</h2>
      <div className="textbox">
        <input
          type="text"
          value={formValue.email}
          onChange={changeValueInputHandler(EMAIL)}
          className="input"
          id="email"
          placeholder="Enter your email"
          required
        />
        <label htmlFor="email" className="label"></label>
        <span>
          <MdOutlineAlternateEmail />
        </span>
      </div>
      <div className="textbox">
        <input
          type={passwordView ? "password" : "text"}
          value={formValue.password}
          onChange={changeValueInputHandler(PASSWORD)}
          className="input"
          id="password"
          placeholder="Enter your password"
          required
        />
        <label htmlFor="email" className="label"></label>
        <span onClick={showPasswordHandler}>
          <MdPassword />
        </span>
      </div>
      <button type="submit" className="button">
        Login
        <span>
          <AiOutlineArrowRight />
        </span>
      </button>
    </FormStyled>
  );
};

export default Form;
