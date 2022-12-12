import React, { useEffect, useReducer } from "react";
import {
  MdOutlineAccountCircle,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { RiLockPasswordLine } from "react-icons/ri";
import { SignupStyled } from "../assets/Global";
import { Link, useNavigate } from "react-router-dom";
import { FaTrello } from "react-icons/fa";
import bgImage from "../assets/Twilight-0.7s-1680px.svg";
import { useDispatch } from "react-redux";
import {
  clearTrelloCardList,
  postUserDataHandler,
} from "../store/reducers/signupReducer";
import { formReducer, initialFormState } from "../utils/valueReducer";
import { changeUser } from "../store/reducers/loginReducer";

const Signup = () => {
  const [formState, dispatchFormState] = useReducer(
    formReducer,
    initialFormState
  );

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const changeFormStateHandler = (key) => {
    return (e) => {
      dispatchFormState({ type: key, payload: e.target.value });
    };
  };


  useEffect(() => {
    dispatch(changeUser(""));
    dispatch(clearTrelloCardList());
  }, [dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(postUserDataHandler(formState));
    dispatchFormState({ type: "RESET" });
    dispatch(changeUser(formState.name));
    navigate("/home");
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
