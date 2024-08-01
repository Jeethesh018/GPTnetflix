import { configureStore } from "@reduxjs/toolkit";
import userDetails from "./userDetails";
import MovieSlice from "./MovieSlice";

const store = configureStore({
  reducer: {
    user: userDetails,
    Movies: MovieSlice,
  },
});

export default store;
