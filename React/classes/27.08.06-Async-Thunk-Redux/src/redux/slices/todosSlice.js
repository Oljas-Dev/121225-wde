import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (_payload, thunkApi) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (todoId, thunkApi) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/" + todoId,
        { method: "DELETE" },
      );

      const data = await response.json();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

export const completeTodo = createAsyncThunk(
  "todos/completeTodo",
  async (todoId, thunkApi) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/" + todoId,
        { method: "PATCH", body: JSON.stringify({ completed: true }) },
      );

      const data = await response.json();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    data: [],
    status: "idle", // 'loading', 'succeded', 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "succeded";
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        // state.error = "Failed to get todos";
      });

    builder
      .addCase(deleteTodo.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.data = state.data.filter((todo) => todo.id !== action.payload);
        state.status = "succeded";
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        // state.error = "Failed to get todos";
      });

    builder
      .addCase(completeTodo.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(completeTodo.fulfilled, (state, action) => {
        const completedTodo = state.data.find(
          (todo) => todo.id === action.payload.id,
        );

        if (completedTodo) {
          completedTodo.completed = true;
        }

        state.status = "succeded";
      })
      .addCase(completeTodo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        // state.error = "Failed to get todos";
      });
  },
});

export default todosSlice.reducer;
