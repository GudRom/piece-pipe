import { configureStore } from "@reduxjs/toolkit";
import { save, load } from "redux-localstorage-simple";
import wigwamReducer from "./slices/wigwam/slice";
import inviteReducer from "./slices/invite/slice";
import userReducer from "./slices/user/slice";
import songReducer from "./slices/song/slice";

export const store = configureStore({
  reducer: {
    wigwamReducer,
    inviteReducer,
    userReducer,
    songReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(save()),
  preloadedState: load(),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
