import {combineReducers, configureStore, createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: state => {
      state.user = null;
    },
  },
});
const movieListSlice = createSlice({
  name: 'movieList',
  initialState: {
    movieList: [],
  },
  reducers: {
    setMovie: (state, action) => {
      state.movieList = action.payload;
    },
  },
});
const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    activeTheme: 'light',
  },
  reducers: {
    toggleTheme: state => {
      return {
        activeTheme: state.activeTheme === 'light' ? 'dark' : 'light',
      };
    },
  },
});

export const {setUser, logout} = userSlice.actions;
export const {setMovie} = movieListSlice.actions;
export const {toggleTheme} = themeSlice.actions;

export const store = configureStore({
  reducer: combineReducers({
    user: userSlice.reducer,
    movieList: movieListSlice.reducer,
    theme: themeSlice.reducer,
  }),
});
