import { configureStore } from "@reduxjs/toolkit";
import { save, load } from "redux-localstorage-simple";

export const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) =>
    process.env.REACT_APP_MODE === `development`
      ? getDefaultMiddleware().concat(save())
      : getDefaultMiddleware().concat(save()),
  preloadedState: load(),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
