import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  opened: false,
  data: {
    typeOfExpense: "",
    description: "",
    category: "",
    amount: 0,
  },
};

// const onHandleInputChange = (event) => {
//   setUserInfo((previousInfo) => ({
//     ...previousInfo,
//     [event.target.name]: event.target.value,
//   }));
//   // console.log(userInfo);
// };

const modalAddSlice = createSlice({
  name: "modalAdd",
  initialState,
  reducers: {
    openAddModal: (state) => {
      state.opened = true;
    },
    closeAddModal: (state) => {
      state.opened = false;
    },
    handleInputChange: (state, action) => {
      const event = action.payload;
      console.log(event.target.name, event.target.value);
      state.data[event.target.name] = event.target.value;
    },
  },
});

export const { openAddModal, closeAddModal, handleInputChange } =
  modalAddSlice.actions;

export default modalAddSlice.reducer;
