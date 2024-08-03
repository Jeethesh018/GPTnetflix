import { createSlice } from "@reduxjs/toolkit";

let MovieSlice = createSlice({
  name: "Movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
  },
});
export const { addNowPlaying, addTrailerVideo, addPopularMovies } =
  MovieSlice.actions;

export default MovieSlice.reducer;
