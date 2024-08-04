import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "GPT",
  initialState: {
    toggleSearchView: false,
    languageChange: "English",
  },
  reducers: {
    ToggleGPTSearchView: (state) => {
      state.toggleSearchView = !state.toggleSearchView;
    },
    addlanguageChange: (state, action) => {
      state.languageChange = action.payload;
    },
  },
});
export const { ToggleGPTSearchView, addlanguageChange } = GPTSlice.actions;
export default GPTSlice.reducer;
