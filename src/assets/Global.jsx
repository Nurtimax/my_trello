import styled from "styled-components";

const Container = styled.div`
  & {
    max-width: 95%;
    margin: 0 auto;
  }
`;

const LoginStyled = styled.div`
  & {
    display: grid;
    width: 100%;
    height: 100vh;
    background: linear-gradient(
      90deg,
      rgba(224, 228, 224, 1) 66%,
      rgba(204, 209, 209, 1) 100%
    );
    justify-content: center;
    grid-template-columns: 1fr;
    padding: 10px;
  }
  & .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 1rem;
    margin: 0 auto;
  }
  & .logo h1:last-child {
    font-size: 5rem;
    margin: 0;
    padding: 0;
    color: #253858;
  }
  & .h1 {
    color: #0079bf;
    font-size: 5rem;
    padding: 0;
    margin: 0;
  }
  & .button,
  .input {
    border: 0;
    width: 100%;
    height: 60px;
    background: transparent;
    font-family: inherit;
    font-size: 16px;
    outline: none;
  }
  & .signup {
    position: fixed;
    z-index: 2;
    left: 0;
    top: 0;
    height: 100%;
    width: 40%;
    padding: 200px 90px;
    background: #111820;
  }
  & .signup h2 {
    margin: 0 0 6px;
    color: rgb(255 255 255/ 96%);
  }
  & .signup h3 {
    margin: 0 0 30px;
    color: rgb(255 255 255/ 40%);
  }
`;

const FormStyled = styled.form`
  & {
    margin: 30px auto;
    display: grid;
    gap: 16px;
    background: #f9f8f8;
    width: 40rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 5rem;
    border-radius: 5px;
  }
  & .textbox {
    position: relative;
    margin-bottom: 16px;
  }
  & .h2 {
    display: flex;
    justify-content: center;
    font-weight: 500;
    color: #6c798f;
  }
  & .textbox span {
    position: absolute;
    top: 50%;
    translate: 0 -50%;
    left: 0;
    font-size: 30px;
    /* pointer-events: none; */
    color: rgb(25 25 25/40%);
    z-index: 1;
    cursor: pointer;
  }
  & .textbox .input {
    padding: 0 24px 0 36px;
    border-bottom: 2px solid #2d3442;
    color: rgb(25 25 25 / 96%);
    height: 42px;
    font-size: 20px;
  }
  & .input:focus {
    border-color: #216ce7;
  }
  & :is(.input:focus, .input:valid, .input::placeholder) ~ span {
    color: rgb(25 25 25 / 96%);
  }

  & .textbox .label {
    position: absolute;
    top: 50%;
    left: 36px;
    translate: 0 -50%;
    color: rgb(25 25 25 / 40%);
    pointer-events: none;
    transition: 0.4s;
  }
  & :is(.input:focus, .input:valid) ~ .label {
    translate: -40px -40px;
    scale: 0.875;
  }
  & .input:focus ~ .label {
    color: #216ce7;
  }
  & .button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 0 24px;
    border-radius: 6px;
    background: #216ce7;
    color: #f9f9f9;
    border: 0;
    font-family: inherit;
    font-weight: 600;
  }
`;

const ErrorModalStyled = styled.div`
  & {
    width: 100%;
    height: 100vh;
    position: fixed;
    background: rgb(0, 0, 0, 0.6);
    z-index: 10;
    display: flex;
    justify-content: center;
    /* align-items: center; */
  }
  & .error_cart {
    width: 45%;
    height: 40%;
    background: #f3f3f3;
    border-radius: 0.5rem;
    margin: 10% 0 0;
    animation: MODAL 0.8s ease-in-out;
  }
  & .error_cart_header {
    height: 20%;
    background: #e43d35;
    border-radius: inherit;
    box-shadow: #0000007b 0 1px 4px;
    display: flex;
    align-items: center;
    padding: 10px;
  }
  & .error_cart_article {
    height: 80%;
    background: linear-gradient(
      90deg,
      rgba(216, 218, 216, 1) 21%,
      rgba(210, 215, 210, 1) 38%,
      rgba(211, 213, 211, 1) 52%,
      rgba(211, 213, 211, 1) 66%,
      rgba(208, 210, 210, 1) 100%
    );
    border-radius: inherit;
    padding: 1rem;
    display: flex;
    flex-direction: column;
  }
  & .error_message {
    height: 80%;
  }
  & .btns {
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 5px;
  }
  & .btns button {
    width: 8rem;
    height: 2rem;
    border: 0.1px solid rgba(241, 244, 244, 1);
    border-radius: 3px;
    background: linear-gradient(
      90deg,
      rgba(226, 227, 226, 1) 25%,
      rgba(226, 228, 228, 1) 100%
    );
    font-size: 1rem;
    font-weight: 500;
    box-shadow: #00000074 0 1px 2px;
  }
  @keyframes MODAL {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const AddListStyled = styled.div`
  & {
    width: 20%;
    padding: 0.2rem;
    margin: 1rem;
    background: #9fa3a6;
    display: flex;
    align-items: center;
    gap: 1rem;
    color: rgb(255 255 255 / 90%);
    border-radius: 3px;
    box-shadow: #00000043 0 1px 3px;
    cursor: pointer;
    position: relative;
  }
  & .button {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 1rem;
    background: none;
    border: none;
    padding: 0.5rem;
  }
`;

const AddListModaltyled = styled.div`
  & {
    width: 18rem;
    height: 35rem;
    background: #f5f5f5;
    position: absolute;
    left: 95%;
    top: 50%;
    border-radius: 5px;
    box-shadow: #00000039 0 1px 2px;
    display: flex;
    flex-direction: column;
  }
  & .list_modal_header {
    color: rgb(25 25 25 / 70%);
    height: 10%;
    background: linear-gradient(
      90deg,
      rgba(91, 166, 101, 1) 25%,
      rgba(24, 163, 114, 1) 100%
    );
    border-radius: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .background_styled img {
    width: 30%;
    height: 100%;
    border-radius: 3px;
    box-shadow: #0000004e 0 1px 2px;
  }
  & .background_styled {
    width: 90%;
    overflow-y: scroll;
    height: 4rem;
    display: flex;
    gap: 0.2rem;
    padding: 0.2rem;
    margin: 0 auto;
  }
  & .default_img img {
    width: 90%;
    height: 90%;
    border-radius: 3px;
  }

  & .default_img {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    padding: 0.2rem;
  }
  & .choose_background_colors {
    width: 90%;
    overflow-y: scroll;
    height: 4rem;
    display: flex;
    gap: 0.2rem;
    padding: 0.2rem;
    margin: 0 auto;
  }
`;

const BackgroundColorChoose = styled.div`
  & {
    width: 90%;
    height: 90%;
    border-radius: 3px;
    border: 0.1px solid black;
    background: ${({ backgroundShow }) => String(backgroundShow)};
  }
`;

const InputStyled = styled.input`
  & {
    width: 100%;
    height: 2rem;
    margin: 0 auto;
    outline: none;
    padding: 0 5px;
  }
`;

const AddListModalFormStyled = styled.form`
  & {
    height: 10%;
    width: 100%;
    display: grid;
    align-items: center;
    justify-content: center;
    color: rgb(25 25 25 / 40%);
    padding: 1rem;
    gap: 100%;
  }
`;

const ButtonStyled = styled.button`
  & {
    width: 100%;
    height: 2rem;
    margin: 0 auto;
    border-radius: 3px;
    border: 1px solid gray;
    background: #f5f5f5;
    box-shadow: #00000043 0 1px 2px;
    font-size: 1rem;
    color: rgb(25 25 25 / 78%);
    cursor: pointer;
  }
`;

const BackgroundColorsStyled = styled.div`
  & {
    width: 100rem;
    height: 100%;
    background: ${({ isColor }) => isColor};
    border-radius: 3px;
  }
`;

const TrelloCardStyled = styled.div`
  & {
    width: 20%;
    padding: 0.7rem;
    /* margin: 2rem 0; */
    background: #f5f5f5;
    border-radius: 3px;
  }
  & .trello_card {
    width: 100%;
    padding: 0.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  & .trello_card_header {
    font-size: 1.5rem;
    padding: 0.5rem 0;
  }
  & .button {
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 5px;
    font-size: 0.9rem;
  }
  & .textarea {
    resize: none;
    outline: none;
    padding: 0.3rem;
    box-shadow: #00000033 0 1px 2px;
    border-radius: 3px;
    border: 0.1px solid;
    font-size: 1rem;
    width: 100%;
  }
`;

const TrelloCardListStyled = styled.div`
  & {
    width: 100%;
    height: 100%;
    padding: 0.5rem 0;
    background: #e8efed;
    display: flex;
    align-items: flex-start;
    color: rgb(25 25 25 / 70%);
    border-radius: 3px;
    box-shadow: #0000004e 0 1px 2px;
    display: flex;
    justify-content: space-between;
    position: relative;
  }
  & .button {
    width: 10%;
    height: 100%;
    background: #e8efed;
    border: 0.1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
  }
  & .save_button {
    width: 20%;
  }
`;

const TrelloCardListMenuStyled = styled.div`
  & {
    width: 8rem;
    height: 4rem;
    background: #f5f5f5;
    position: absolute;
    left: 100%;
    top: 50%;
    margin: 5px;
    display: grid;
    gap: 3px;
    padding: 2px;
    border-radius: 2px;
  }
  & .button {
    width: 100%;
    height: 100%;
  }
`;

const ListStyled = styled.div`
  & {
    background-image: url(${({ image }) => image});
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
  }
  & .list_card {
    display: flex;
    gap: 5rem;
    flex-wrap: wrap;
  }
`;

const ListCardStyled = styled.div`
  & {
    width: 25%;
    height: 10rem;
    background: #f5f5f5;
    border-radius: 5px;
    padding: 0.5rem;
    background-image: url(${({ image }) => image});
    background-repeat: no-repeat;
    background-size: cover;
    color: rgb(255 255 255 / 90%);
  }
`;

const ListsCardStyled = styled.div`
  & {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
  }
`;

const SignupStyled = styled.div`
  * {
    box-sizing: border-box;
  }
  & button,
  input {
    border: 0;
    width: 100%;
    height: 60px;
    background: transparent;
    font-family: inherit;
    font-size: 1rem;
    outline: none;
  }
  & .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 1rem;
    margin: 0 auto;
  }
  & .logo h1:last-child {
    font-size: 5rem;
    margin: 0;
    padding: 0;
    color: #253858;
  }
  & .h1 {
    color: #0079bf;
    font-size: 5rem;
    padding: 0;
    margin: 0;
  }
  & .clouds {
    position: fixed;
    top: 30%;
    left: 0;
    width: 3000px;
    height: 1500px;
    translate: 0% -50%;
    animation: clouds 15s infinite linear;
  }
  & .signup {
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    height: 100%;
    width: 50%;
    padding: 100px 90px;
    background: #111820;
  }

  & .signup h2 {
    margin: 0 0 6px;
    color: rgb(255 255 255 / 96%);
  }
  & .signup h3 {
    margin: 0 0 30px;
    color: rgb(255 255 255 / 96%);
  }

  & .form {
    margin: 0;
    display: grid;
    gap: 1rem;
  }

  & .textbox {
    position: relative;
    margin-bottom: 1rem;
  }

  & .textbox span {
    position: absolute;
    top: 50%;
    translate: 0 -50%;
    left: 0;
    font-size: 22px;
    color: rgb(255 255 255 / 40%);
  }
  & .textbox input {
    padding: 0 24px 0 36px;
    border-bottom: 2px solid #2b3442;
    color: rgb(255 255 255 / 96%);
    height: 72px;
  }

  & input:focus {
    border-color: #216ce7;
  }
  & :is(input:focus, input:valid) ~ span {
    color: rgb(255 255 255 / 96%);
  }

  & .textbox label {
    position: absolute;
    top: 50%;
    left: 36px;
    translate: 0 -50%;
    color: rgb(255 255 255 / 40%);
    transition: 0.4s;
  }

  & :is(input:focus, input:valid) ~ label {
    translate: -40px -40px;
    scale: 0.875;
  }

  & input:focus ~ label {
    color: #216ce7;
  }
  & button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 0 24px;
    border-radius: 6px;
    background: #216ce7;
    color: #f9f9f9;
    border: 0;
    font-family: inherit;
    font-weight: 600;
  }
  & .signup p {
    color: #778395;
  }
  & .signup p a {
    color: #216ce7;
  }

  @keyframes clouds {
    100% {
      translate: -50wv -55%;
      scale: 1 1.1;
    }
  }
`;

export {
  Container,
  LoginStyled,
  FormStyled,
  ErrorModalStyled,
  AddListStyled,
  AddListModaltyled,
  InputStyled,
  AddListModalFormStyled,
  ButtonStyled,
  BackgroundColorsStyled,
  BackgroundColorChoose,
  TrelloCardStyled,
  TrelloCardListStyled,
  TrelloCardListMenuStyled,
  ListStyled,
  ListCardStyled,
  ListsCardStyled,
  SignupStyled,
};
