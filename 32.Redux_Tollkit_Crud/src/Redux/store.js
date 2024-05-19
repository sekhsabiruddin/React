import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./DataSlice";

export const store = configureStore({
  reducer: todoReducer,
});
