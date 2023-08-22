import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "./Features/tableSlice";

export const store = configureStore({
  reducer: {
    table: tableReducer,
  },
});
