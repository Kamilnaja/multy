import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { TodoState } from "~tabs/store/todo-slice.model";

const initialState: TodoState = {
  todos: {
    1: {
      id: 1,
      description: "Learn React",
      notes: "Learn React Hooks and Redux",
      priority: "High",
      isDone: false
    }
  }
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state: TodoState, action: PayloadAction<Todo>) => {
      state.todos[action.payload.id] = action.payload;
    },
    editTodo: (state: TodoState, action: PayloadAction<Todo>) => {
      const todo = state.todos[action.payload.id];
      if (todo) {
        todo.description = action.payload.description;
        todo.notes = action.payload.notes;
        todo.priority = action.payload.priority;
      }
    },
    deleteTodo: (state: TodoState, action: PayloadAction<Todo>) => {
      const { id } = action.payload;
      const todos = { ...state.todos };
      delete todos[id];
      state.todos = todos;
    },
    toggleTodo: (state: TodoState, action: PayloadAction<Todo>) => {
      const todo = state.todos[action.payload.id];
      if (todo) {
        todo.isDone = !todo.isDone;
      }
    }
  }
});

export const { addTodo, editTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
