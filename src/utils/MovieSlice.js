import { createSlice } from "@reduxjs/toolkit";

let MovieSlice = createSlice({
  name: "Movies",
  initialState: {
    nowPlayingMovies: null,
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
  },
});
export const { addNowPlaying } = MovieSlice.actions;

export default MovieSlice.reducer;
