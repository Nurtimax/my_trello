import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../../utils/constants/general";

const initialState = {
  users: [],
  data: {
    users: [],
  },
};

const signupReducer = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, { payload }) {
      state.data.users = payload.user;
    },
  },
});

export const { addUser } = signupReducer.actions;
export default signupReducer.reducer;

export const postUserDataHandler = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${BASE_URL}/users.json`, data);
      toast.success(`Succes  status: ${response.status}`);
    } catch (error) {
      toast.error(error.message);
    }
    dispatch(getUserDataHandler());
  };
};

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
      dispatch(addUser({ user: newArr }));
      toast.success(`Succes status: ${response.status}`);
    } catch (error) {
      toast.error(error.message);
    }
  };
};
