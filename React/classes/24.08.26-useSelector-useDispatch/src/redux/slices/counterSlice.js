import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment(state, action) {
      console.log(action.type);
      state.count += 1;
    },
    decrement(state, action) {
      console.log(action.type);
      state.count -= 1;
    },
    reset(state, action) {
      console.log(action.type);
      state.count = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
