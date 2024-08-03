import { createSlice } from "@reduxjs/toolkit";

let userDetails = createSlice({
  name: "user",
  initialState: {
    name: "",
  },
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => {
      return null;
    },
    addName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { addUser, removeUser, addName } = userDetails.actions;

export default userDetails.reducer;
