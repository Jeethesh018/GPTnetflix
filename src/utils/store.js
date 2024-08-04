import { configureStore } from "@reduxjs/toolkit";
import userDetails from "./userDetails";
import MovieSlice from "./MovieSlice";
import GPTSlice from "./GPTSlice";

const store = configureStore({
  reducer: {
    user: userDetails,
    movies: MovieSlice,
    GPT: GPTSlice,
  },
});

export default store;
