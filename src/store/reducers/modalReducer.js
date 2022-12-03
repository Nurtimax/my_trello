import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  key: "",
  backgroundShow: "",
  isShowModal: false,
};

const modalReducer = createSlice({
  name: "modal",
  initialState,
  reducers: {
    chooseImage(state, { payload }) {
      state.backgroundShow = "";
      state.key = payload;
    },
    chooseColor(state, { payload }) {
      state.backgroundShow = payload;
    },
    showModal(state, { payload }) {
      state.isShowModal = !state.isShowModal;
    },
  },
});

export const { chooseImage, chooseColor, showModal } = modalReducer.actions;

export default modalReducer.reducer;
