import { configureStore } from "@reduxjs/toolkit";
import listCardReduucer from "./reducers/listCardReduucer";
import loginReducer from "./reducers/loginReducer";
import modalReducer from "./reducers/modalReducer";
import signupReducer from "./reducers/signupReducer";

export default configureStore({
  reducer: {
    login: loginReducer,
    modal: modalReducer,
    listCard: listCardReduucer,
    signup: signupReducer,
  },
});
