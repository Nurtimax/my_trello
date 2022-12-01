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
