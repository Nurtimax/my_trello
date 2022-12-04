import React, { useEffect, useReducer } from "react";
import { FormStyled } from "../assets/Global";
import { EMAIL, PASSWORD } from "../utils/constants/general";
import { initialState, valueReducer } from "../utils/valueReducer";
import { MdOutlineAlternateEmail, MdPassword } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  changeStart,
  changeUser,
  loginHandler,
  showPasswordValue,
} from "../store/reducers/loginReducer";
import { useNavigate } from "react-router-dom";
import { clearTrelloCardList } from "../store/reducers/signupReducer";

const EMAIL_REGEX = /.+@.+\.[A-Za-z]+$/;
const PASSWORD_REGEX =
  /^([@#](?=[^aeiou]{2}$)(?=[[:alnum:]]{2}$)(?=.*[A-Z]{1,}.*$).+)$/;

const Form = () => {
  const [formValue, dispatchValue] = useReducer(valueReducer, initialState);

  const navigation = useNavigate();

  const dispatch = useDispatch();

  const { passwordView, users } = useSelector((state) => state.login);

  const changeValueInputHandler = (type) => {
    return (e) => {
      dispatchValue({ type, payload: e.target.value });
    };
  };

  useEffect(() => {
    dispatch(changeUser(''))
    dispatch(clearTrelloCardList())
  },[dispatch])

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
    console.log(users,'users');
    for (let index = 0; index < users.length; index++) {
      const element = users[index];
      console.log(element);
      if (
        String(element.email) === String(formValue.email) &&
        String(element.password) === String(formValue.password)
      ) {
        dispatch(changeUser(element.name))
        dispatch(changeStart())
        return navigation("/home");
      }
      console.log('email and password false');
       dispatch(
        loginHandler({
          title: "ERROR",
          message: "Email and password is not true",
        })
      );
    }
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
