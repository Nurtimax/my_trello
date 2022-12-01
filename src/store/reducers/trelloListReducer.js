import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants/general";
import { toast } from "react-toastify";

const initialState = {
  cards: [],
};

const trelloListReducer = createSlice({
  name: "trellolist",
  initialState,
  reducers: {
    addTrelloListHandler(state, { payload }) {
      state.cards = payload;
    },
  },
});

export const { addTrelloListHandler } = trelloListReducer.actions;

export default trelloListReducer.reducer;

export const getDataTrelloListHandler = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${BASE_URL}/trello_list.json`);
      const result = response.data;
      let newArr = [];
      for (const key in result) {
        newArr.push({
          id: key,
          ...result[key],
        });
      }
      dispatch(addTrelloListHandler(newArr));
      toast.success(`Succes ${response.status}`);
    } catch (error) {
      toast.error(error.message);
    }
  };
};

export const sendDataTrelloListHandler = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${BASE_URL}/trello_list.json`, data);
      toast.success(`Succes ${response.status}`);
    } catch (error) {
      toast.error(error.message);
    }
    dispatch(getDataTrelloListHandler());
  };
};
