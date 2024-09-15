import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
});

export default todoSlice.reducer;
