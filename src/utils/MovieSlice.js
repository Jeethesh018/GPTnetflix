import { createSlice } from "@reduxjs/toolkit";

let MovieSlice = createSlice({
  name: "Movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    topRated: null,
    upComing: null,
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
    addTopRated: (state, action) => {
      state.topRated = action.payload;
    },
    addUpComing: (state, action) => {
      state.upComing = action.payload;
    },
  },
});
export const {
  addNowPlaying,
  addTrailerVideo,
  addPopularMovies,
  addTopRated,
  addUpComing,
} = MovieSlice.actions;

export default MovieSlice.reducer;
