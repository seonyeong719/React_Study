import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../services";
import logger from "redux-logger";

export const store = configureStore({
  reducer: rootReducer, // 여기는 slice 한 리듀서들 모아놓음.
  devTools: process.env.NODE_ENV === "development",
  middleware: (defaultMiddleware) => {
    if (process.env.NODE_ENV === "development") {
      return [...defaultMiddleware(), logger];
    }
    return defaultMiddleware();
  },
});
