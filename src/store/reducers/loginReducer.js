import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../../utils/constants/general";

const initialState = {
  isLogin: false,
  error: {},
  passwordView: true,
  users: [],
  user: "",
  start: false,
  createListValid: null,
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
    changeUser(state, { payload }) {
      state.user = payload;
    },
    changeStart(state, { payload }) {
      state.start = !state.start;
    },
    createValid(state, { payload }) {
      state.createListValid = payload;
    },
  },
});

export const {
  loginHandler,
  showPasswordValue,
  getUsers,
  changeUser,
  changeStart,
  createValid
} = loginReducer.actions;

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

export const getUserHandler = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${BASE_URL}/user.json`);
      const result = response.data;
      dispatch(changeUser(result.user));
    } catch (error) {
      toast.error(error.message);
    }
  };
};

export const putUserHandler = (user) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`${BASE_URL}/user.json`, { user });
      toast.success(response.status);
    } catch (error) {
      toast.error(error.message);
    }
  };
};
