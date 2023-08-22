import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data";

const initialState = {
  headers: data.headers,
  items: data.data,
  selectedId: 0,
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    removeItem: (state, action) => {
      const itemID = action.payload;
      state.items = state.items.filter((item) => item.id !== itemID);
    },
  },
});

// export actions
export const { removeItem } = tableSlice.actions;

// export reducer
export default tableSlice.reducer;
