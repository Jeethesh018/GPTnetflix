import { configureStore } from "@reduxjs/toolkit";
import userDetails from "./userDetails";

const store = configureStore({
  reducer: {
    user: userDetails,
  },
});

export default store;
