import { configureStore } from "@reduxjs/toolkit"
import todoReducer, { type TodoState } from "../todo-list/todo-list.slice"

export default configureStore({
  reducer: {
    todo: todoReducer
  }
})

export const todosDoneSelector = (state: TodoState) =>
  state.todo.todos.filter((todo) => todo.isDone)
export const todosNotDoneSelector = (state: TodoState) =>
  state.todo.todos.filter((todo) => !todo.isDone)
