import { createSlice } from "@reduxjs/toolkit";

let MovieSlice = createSlice({
  name: "Movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});
export const { addNowPlaying, addTrailerVideo } = MovieSlice.actions;

export default MovieSlice.reducer;
