import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: "", // 여기는 slice 한 리듀서들 모아놓음.
  devTools: "",
  middleware: "",
});
