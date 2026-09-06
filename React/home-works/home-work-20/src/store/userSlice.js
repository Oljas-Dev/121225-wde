import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      id: 1,
      name: "Oljas",
      email: "oljas@example.com",
    },
    {
      id: 2,
      name: "Kate",
      email: "kate@example.com",
    },
    {
      id: 3,
      name: "Alex",
      email: "alex@example.com",
    },
  ],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
