import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: [],
};

const listCardReducers = createSlice({
  name: "lists_card",
  initialState,
  reducers: {
    addListCard(state, { payload }) {
      state.lists = payload;
    },
  },
});

export const { addListCard } = listCardReducers.actions;

export default listCardReducers.reducer;
