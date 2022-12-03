import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../../utils/constants/general";

const initialState = {
  isLogin: false,
  error: {},
  passwordView: true,
  users: [],
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
    getUsers(state, { payload }) {
      state.users = payload;
    },
  },
});

export const { loginHandler, showPasswordValue, getUsers } =
  loginReducer.actions;

export default loginReducer.reducer;

export const getUserDataHandler = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${BASE_URL}/users.json`);
      const result = response.data;
      let newArr = [];
      for (const key in result) {
        newArr.push({
          id: key,
          ...result[key],
        });
      }
      dispatch(getUsers(newArr));
    } catch (error) {
      toast.error(error.message);
    }
  };
};
