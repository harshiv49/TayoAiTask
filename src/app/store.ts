import { configureStore } from "@reduxjs/toolkit";
import logger from  "redux-logger";
import contactReducer from "../features/contactSlice";

export const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
}
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
