import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const apiUrl = "http://localhost:5001/api/auth";

const storedToken = localStorage.getItem("token");

export const isTokenExpired = (token) => {
  if (!token) return true;

  try {
    const { exp } = jwtDecode(token);
    return !exp || exp * 1000 <= Date.now();
  } catch {
    return true;
  }
};

export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkApi) => {
    try {
      const response = await axios.post(`${apiUrl}/register`, userData);

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message || "Registration failed");
    }
  },
);

export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkApi) => {
    try {
      const response = await axios.post(`${apiUrl}/login`, userData);

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message || "Login failed");
    }
  },
);

const initialToken = isTokenExpired(storedToken) ? null : storedToken;

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: initialToken,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
  },
  reducers: {
    resetState: (state) => {
      ((state.isLoading = false),
        (state.isError = false),
        (state.isSuccess = false),
        (state.message = ""));
    },
    logout: (state) => {
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        ((state.isLoading = true),
          (state.isError = false),
          (state.isSuccess = false));
      })
      .addCase(register.fulfilled, (state, action) => {
        ((state.isLoading = false),
          (state.isError = false),
          (state.isSuccess = true),
          (state.message = "Registration successfull"),
          (state.token = action.payload.token),
          localStorage.setItem("token", action.payload.token));
      })
      .addCase(register.rejected, (state) => {
        ((state.isLoading = false),
          (state.isError = true),
          (state.isSuccess = false),
          (state.message = "Registration failed"));
      });

    builder
      .addCase(login.pending, (state) => {
        ((state.isLoading = true),
          (state.isError = false),
          (state.isSuccess = false));
      })
      .addCase(login.fulfilled, (state, action) => {
        ((state.isLoading = false),
          (state.isError = false),
          (state.isSuccess = true),
          (state.message = "Login successfull"),
          (state.token = action.payload.token),
          localStorage.setItem("token", action.payload.token));
      })
      .addCase(login.rejected, (state) => {
        ((state.isLoading = false),
          (state.isError = true),
          (state.isSuccess = false),
          (state.message = "Login failed"));
      });
  },
});

export const { logout, resetState } = authSlice.actions;
export default authSlice.reducer;
