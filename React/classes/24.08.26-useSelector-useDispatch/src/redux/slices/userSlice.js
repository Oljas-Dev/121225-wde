import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: {
      id: 1,
      name: "Alice",
      email: "alice@gmail.com",
    },
  },
  reducers: {
    setUser(state, action) {
      state.data = action.payload;
    },
    clearUser(state) {
      state.data = {
        id: null,
        name: "",
        email: "",
      };
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
