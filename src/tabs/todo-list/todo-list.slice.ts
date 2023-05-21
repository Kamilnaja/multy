import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

export interface TodoState {
  todo: {
    todos: Todo[]
  }
}

const initialState: TodoState["todo"] = {
  todos: [
    {
      id: 1,
      description: "Do laundry",
      notes: "Don't forget to separate colors!",
      priority: "low",
      isDone: false
    },
    {
      id: 2,
      description: "Do dishes",
      priority: "high",
      isDone: true
    },
    {
      id: 3,
      description: "Do homework",
      priority: "high",
      isDone: false
    },
    {
      id: 4,
      description: "Buy milk",
      priority: "low",
      isDone: true
    }
  ]
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload)
    }
  }
})

export const { addTodo } = todoSlice.actions
export default todoSlice.reducer
