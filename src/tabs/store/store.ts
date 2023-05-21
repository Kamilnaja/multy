import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "../todo-list/todo-list.slice"

export default configureStore({
  reducer: {
    counter: todoReducer
  }
})
