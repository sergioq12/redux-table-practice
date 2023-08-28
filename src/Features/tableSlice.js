import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { data } from "../data";
import axios from "axios";

const requestURL = "http://127.0.0.1:8000";

const initialState = {
  headers: data.headers,
  items: data.data,
  selectedId: 0,
  loggedInState: "Not Logged In",
  user_name: "Not an User",
};

// API requests
export const LoginRequest = createAsyncThunk(
  "table/loginRequest",
  async (name, thunkAPI) => {
    console.log(thunkAPI.getState());
    const res = await axios.post(`${requestURL}/login`, {
      email: "sergio@gmail.com",
      password: "tigre123",
    });

    return res.data;
  }
);

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    removeItem: (state, action) => {
      const itemID = action.payload;
      state.items = state.items.filter((item) => item.id !== itemID);
    },
    addItem: (state, action) => {
      let data = action.payload;
      data = {
        ...data,
        id: 5,
      };
      state.items.push(data);
    },
  },
  extraReducers: {
    [LoginRequest.pending]: (state) => {
      console.log("Request pending");
    },
    [LoginRequest.fulfilled]: (state, action) => {
      console.log("Request fulfilled");
      const data = action.payload;
      state.user_name =
        data["data"]["first_name"] + " " + data["data"]["last_name"];
      state.loggedInState = "Logged In";
    },
    [LoginRequest.rejected]: (state) => {
      console.log("Request rejected");
    },
  },
});

// export actions
export const { removeItem, addItem } = tableSlice.actions;

// export reducer
export default tableSlice.reducer;
