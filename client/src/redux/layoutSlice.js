import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSearch: false,
  backdrop: "https://image.tmdb.org/t/p/original/",
  poster: "https://image.tmdb.org/t/p/w370_and_h556_bestv2/",
  page: 1,
  searchQuery: "",
  cardAction: false,
  castCardAction: false,
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.isSearch = action.payload;
    },
    setPage: (state) => {
      state.page += 1;
    },
    resetPage: (state) => {
      state.page = 1;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    resetSearchQuery: (state) => {
      state.searchQuery = "";
    },
    setCardAction: (state, action) => {
      state.cardAction = action.payload;
    },
    setCastCardAction: (state, action) => {
      state.castCardAction = action.payload;
    }
  },
});

export const {
  setSearch,
  setPage,
  resetPage,
  setSearchQuery,
  resetSearchQuery,
  setCardAction,
  setCastCardAction
} = layoutSlice.actions;
export default layoutSlice.reducer;
