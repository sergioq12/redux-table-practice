import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  opened: false,
  itemID: -1,
};

const modalRemoveSlice = createSlice({
  name: "modalRemove",
  initialState,
  reducers: {
    setItemID: (state, action) => {
      state.itemID = action.payload;
    },
    openRemoveModal: (state) => {
      state.opened = true;
    },
    closeRemoveModal: (state) => {
      state.opened = false;
    },
  },
});

export const { setItemID, openRemoveModal, closeRemoveModal } =
  modalRemoveSlice.actions;

export default modalRemoveSlice.reducer;
