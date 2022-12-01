import React, { useReducer } from "react";
import {
  MdOutlineAccountCircle,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { RiLockPasswordLine } from "react-icons/ri";
import { SignupStyled } from "../assets/Global";
import { Link } from "react-router-dom";
import { FaTrello } from "react-icons/fa";
import bgImage from "../assets/Twilight-0.7s-1680px.svg";
import { useDispatch } from "react-redux";
import { postUserDataHandler } from "../store/reducers/signupReducer";

const initialFormState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const formReducer = (state, { type, payload }) => {
  switch (type) {
    case "NAME":
      return {
        ...state,
        name: payload,
      };
    case "EMAIL":
      return {
        ...state,
        email: payload,
      };
    case "PASSWORD":
      return {
        ...state,
        password: payload,
      };
    case "CONFIRMPASSWORD":
      return {
        ...state,
        confirmPassword: payload,
      };
    case "RESET":
      return initialFormState;

    default:
      return state;
  }
};

const Signup = () => {
  const [formState, dispatchFormState] = useReducer(
    formReducer,
    initialFormState
  );

  const dispatch = useDispatch();

  const changeFormStateHandler = (key) => {
    return (e) => {
      dispatchFormState({ type: key, payload: e.target.value });
    };
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(postUserDataHandler(formState));
    dispatchFormState({ type: "RESET" });
  };

  return (
    <SignupStyled>
      <img src={bgImage} alt="" className="clouds" />
      <div className="signup">
        <div className="logo">
          <h1 className="h1">
            <FaTrello />
          </h1>
          <h1>Trello</h1>
        </div>
        <form className="form" onSubmit={submitHandler}>
          <div className="textbox">
            <input
              type="text"
              required
              value={formState.name}
              onChange={changeFormStateHandler("NAME")}
            />
            <label htmlFor="name">Name</label>
            <span>
              <MdOutlineAccountCircle />
            </span>
          </div>
          <div className="textbox">
            <input
              type="text"
              required
              value={formState.email}
              onChange={changeFormStateHandler("EMAIL")}
            />
            <label htmlFor="name">Email</label>
            <span>
              <SiGmail />
            </span>
          </div>
          <div className="textbox">
            <input
              type="password"
              required
              value={formState.password}
              onChange={changeFormStateHandler("PASSWORD")}
            />
            <label htmlFor="name">Password</label>
            <span>
              <RiLockPasswordLine />
            </span>
          </div>
          <div className="textbox">
            <input
              type="password"
              required
              value={formState.confirmPassword}
              onChange={changeFormStateHandler("CONFIRMPASSWORD")}
            />
            <label htmlFor="name">Confirm Password</label>
            <span>
              <RiLockPasswordLine />
            </span>
          </div>
          <p>
            Signed up already?
            <Link to="/login">Login here</Link>
          </p>
          <button>
            Join The Elitists{" "}
            <span>
              <MdOutlineArrowForwardIos />
            </span>
          </button>
        </form>
      </div>
    </SignupStyled>
  );
};

export default Signup;