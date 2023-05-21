import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "../todo-list/todo-list.slice"

export default configureStore({
  reducer: {
    todo: todoReducer
  }
})

// export type RootState = ReturnType<typeof configureStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof configureStore.dispatch
