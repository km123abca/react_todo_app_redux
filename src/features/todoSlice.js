import { createSlice } from "@reduxjs/toolkit";
import { loadToDB } from "../components/Databasefns";
const initialState = { todoList: [] };
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
      loadToDB(action.payload);
    },
    reloadTodos: (state, action) => {
      state.todoList = action.payload;
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter((x) => x.id != action.payload);
    },
    setCheck: (state, action) => {
      state.todoList.map((item) => {
        if (action.payload == item.id) item.done = !item.done;
      });
    },
  },
});

export const {
  saveTodo,
  setCheck,
  reloadTodos,
  deleteTodo,
} = todoSlice.actions;
export const selectTodoList = (state) => state.todos.todoList;
export default todoSlice.reducer;
