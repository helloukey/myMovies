import { configureStore } from '@reduxjs/toolkit'
import layoutReducer from "./layoutSlice";
import genreReducer from "./genreSlice";
import userReducer from "./userSlice";
import { tmdbApi } from './tmdbApi';
import { userApi } from './userApi';

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    genre: genreReducer,
    user: userReducer,
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    [userApi.reducerPath]: userApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(tmdbApi.middleware, userApi.middleware)
})