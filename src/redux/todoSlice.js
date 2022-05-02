import { createSlice } from "@reduxjs/toolkit";

const arr = localStorage.getItem("todos");
const todoSlice = createSlice({
  name: "todos",
  initialState: arr ? JSON.parse(arr) : [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state));
    },
    deleteTodo: (state, action) => {
      state.splice(action.payload, 1);
      localStorage.setItem("todos", JSON.stringify(state));
    },
  },
});

const { actions, reducer } = todoSlice;
export const { addTodo, deleteTodo } = actions;

export default reducer;
