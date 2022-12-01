import { Container, LoginStyled } from "../assets/Global";
import Form from "../layouts/Form";
import { FaTrello } from "react-icons/fa";
import ErrorModal from "../components/error_modal/ErrorModal";
import { useSelector } from "react-redux";
import ReactDOM from "react-dom";

const Login = () => {
  const { isLogin } = useSelector((state) => state.login);

  return (
    <>
      {isLogin &&
        ReactDOM.createPortal(
          <ErrorModal />,
          document.getElementById("error_modal")
        )}
      <LoginStyled>
        <Container>
          <div className="logo">
            <h1 className="h1">
              <FaTrello />
            </h1>
            <h1>Trello</h1>
          </div>
          <Form />
        </Container>
      </LoginStyled>
    </>
  );
};

export default Login;
