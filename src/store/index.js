import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducers/loginReducer";
import modalReducer from "./reducers/modalReducer";
import trelloListReducer from "./reducers/trelloListReducer";
import trelloReducer from "./reducers/trelloReducer";

export default configureStore({
  reducer: {
    login: loginReducer,
    modal: modalReducer,
    trello: trelloReducer,
    trelloList: trelloListReducer,
  },
});
