import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../../utils/constants/general";

const initialState = {
  data: {
    trelloCardList: [],
  },
};

const signupReducer = createSlice({
  name: "users",
  initialState,
  reducers: {
    addTrelloCardList(state, { payload }) {
      state.data.trelloCardList.push(payload);
    },
    addList(state, { payload }) {
      state.data.trelloCardList.map((cardList) => {
        if (payload.trelloId === cardList.id) {
          cardList.page.push(payload);
        }
        return cardList;
      });
    },
    addPage(state, { payload }) {
      state.data.trelloCardList.map((card) => {
        if (card.id === payload.id) {
          card.page.push(payload.newCard);
        }
        return card;
      });
    },
    addCard(state, { payload }) {
      state.data.trelloCardList.map((page) => {
        if (payload.trelloId === page.id) {
          page.page.map((item) => {
            if (item.id === payload.pageId) {
              item.cards.push(payload.title);
            }
            return item;
          });
        }
        return page;
      });
    },
    deleteCard(state, { payload }) {
      state.data.trelloCardList.map((page) => {
        if (payload.trelloId === page.id) {
          page.page.map((item) => {
            if (item.id === payload.pageId) {
              item.cards = item.cards.filter((el) => el.id !== payload.cardId);
            }
            return item;
          });
        }
        return page;
      });
    },
    editCard(state, { payload }) {
      state.data.trelloCardList.map((page) => {
        if (payload.trelloId === page.id) {
          page.page.map((item) => {
            if (item.id === payload.pageId) {
              item.cards = item.cards.map((el) => {
                if (el.id === payload.cardId) {
                  el.title = payload.newTitle;
                }
                return el;
              });
            }
            return item;
          });
        }
        return page;
      });
    },
    getTrelloCardListItem(state, { payload }) {
      state.data.trelloCardList = payload.trelloCardList || [];
    },
    clearTrelloCardList(state, { payload }) {
      state.data.trelloCardList = [];
    },
  },
});

export const {
  addTrelloCardList,
  addList,
  addPage,
  addCard,
  deleteCard,
  editCard,
  getTrelloCardListItem,
  clearTrelloCardList
} = signupReducer.actions;
export default signupReducer.reducer;

export const postUserDataHandler = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${BASE_URL}/users.json`, data);
      toast.success(`Succes  status: ${response.status}`);
    } catch (error) {
      toast.error(error.message);
    }
  };
};

export const addUserDataHandler = (data, id) => {
  console.log(data, "data add user");
  return async (dispatch) => {
    try {
      const response = await axios.get(`${BASE_URL}/data_${data}.json`, data);
      const result = response.data;
      toast.success(`Succes put status ${response.status}`);
      // console.log(result);
      dispatch(getTrelloCardListItem(result));
    } catch (error) {
      toast.error(`${error.message} addUserDataHandler`);
    }
    // dispatch(getUserDataHandler());
  };
};

export const putUserDataHandler = (data, name) => {
  // console.log(data,'put sign');
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/data_${name}.json`,
        data.data
      );
      toast.success(`Succes put status ${response.status}`);
    } catch (error) {
      toast.error(error.message);
    }
    // dispatch(getUserDataHandler());
  };
};
