import { configureStore } from "@reduxjs/toolkit";
import incomeReducer from "../action/incomeSlice";

export const store = configureStore({
  reducer: {
    incomes: incomeReducer,
  },
});
