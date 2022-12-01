import { configureStore } from "@reduxjs/toolkit";
import listCardReduucer from "./reducers/listCardReduucer";
import loginReducer from "./reducers/loginReducer";
import modalReducer from "./reducers/modalReducer";
import signupReducer from "./reducers/signupReducer";
import trelloListReducer from "./reducers/trelloListReducer";
import trelloReducer from "./reducers/trelloReducer";

export default configureStore({
  reducer: {
    login: loginReducer,
    modal: modalReducer,
    trello: trelloReducer,
    trelloList: trelloListReducer,
    listCard: listCardReduucer,
    signup: signupReducer,
  },
});
