import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "./Features/tableSlice";
import modalRemoveSlice from "./Features/modalRemoveSlice";
import modalAddSlice from "./Features/modalAddSlice";

export const store = configureStore({
  reducer: {
    table: tableReducer,
    modalRemove: modalRemoveSlice,
    modalAdd: modalAddSlice,
  },
});
