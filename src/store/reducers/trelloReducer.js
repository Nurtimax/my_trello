import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants/general";
import { toast } from "react-toastify";

const initialState = {
  items: [],
  openFiled: false,
};

const trelloReducer = createSlice({
  name: "trello",
  initialState,
  reducers: {
    addTrelloItems(state, { payload }) {
      // state[`${payload.key.join("_").toLowerCase()}`] = payload.newArr;
      state[`${payload.key[1].toLowerCase()}_${payload.key[0].toLowerCase()}`] =
        payload.newArr;
    },
    showFiled(state, { payload }) {
      state.openFiled = !state.openFiled;
    },
  },
});

export const { addTrelloItems, showFiled } = trelloReducer.actions;

export default trelloReducer.reducer;

export const getDataHandler = (title, children) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/card_${title.toLowerCase()}_${children.toLowerCase()}.json`
      );
      const result = response.data;
      let newArr = [];
      for (const key in result) {
        newArr.push({
          id: key,
          ...result[key],
        });
      }
      dispatch(addTrelloItems({ newArr, key: [children, title] }));
      toast.success(`Succes ${response.status}`);
    } catch (error) {
      toast.error(error.message);
    }
  };
};
