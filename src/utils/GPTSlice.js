import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "GPT",
  initialState: {
    toggleSearchView: false,
    languageChange: "English",
    searchedMoviesList: [],
  },
  reducers: {
    ToggleGPTSearchView: (state) => {
      state.toggleSearchView = !state.toggleSearchView;
    },
    addlanguageChange: (state, action) => {
      state.languageChange = action.payload;
    },
    addSearchedMovies: (state, action) => {
      state.searchedMoviesList = action.payload;
    },
  },
});
export const { ToggleGPTSearchView, addlanguageChange, addSearchedMovies } =
  GPTSlice.actions;
export default GPTSlice.reducer;
