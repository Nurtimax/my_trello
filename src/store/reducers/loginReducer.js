import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  error: {},
  passwordView: true,
};

const loginReducer = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginHandler(state, { payload }) {
      state.isLogin = !state.isLogin;
      state.error = payload;
    },
    showPasswordValue(state, { payload }) {
      state.passwordView = !state.passwordView;
    },
  },
});

export const { loginHandler, showPasswordValue } = loginReducer.actions;

export default loginReducer.reducer;
