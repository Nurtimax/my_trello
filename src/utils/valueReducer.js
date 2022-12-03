import { EMAIL, PASSWORD } from "./constants/general";

export const initialState = {
  email: "",
  password: "",
};

export const valueReducer = (state, { payload, type }) => {
  switch (type) {
    case EMAIL:
      return {
        ...state,
        email: payload,
      };
    case PASSWORD:
      return {
        ...state,
        password: payload,
      };

    default:
      return state;
  }
};

export const initialFormState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const formReducer = (state, { type, payload }) => {
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



export const initialStateCard = {
  showModal: false,
  editCard: true,
};

export const cardListReducer = (state, { type, payload }) => {
  switch (type) {
    case "MODAL":
      return {
        ...state,
        showModal: !state.showModal,
      };

    case "EDIT":
      return {
        ...state,
        editCard: !state.editCard,
      };

    case "TITLE":
      return {
        ...state,
        title: payload,
      };

    default:
      return state;
  }
};
