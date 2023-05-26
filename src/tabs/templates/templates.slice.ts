import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface Template {
  id: number;
  title: string;
  description: string;
  todos: Todo[];
}

export interface TemplateState {
  templates: Template[];
}

const initialState: TemplateState = {
  templates: [
    {
      id: 1,
      title: "Daily Routine",
      description: "A template for your daily routine",
      todos: [
        {
          id: 1,
          description: "Wake up",
          notes: "Don't forget to set an alarm!",
          priority: "low",
          isDone: false
        }
      ]
    }
  ]
};

export const templateSlice = createSlice({
  name: "templates",
  initialState,
  reducers: {
    addTemplate: (state, action: PayloadAction<Template>) => {
      state.templates.push(action.payload);
    },
    deleteTemplate: (state, action: PayloadAction<Todo["id"]>) => {
      state.templates = state.templates.filter(
        (todo) => todo.id !== action.payload
      );
    }
  }
});

export const { addTemplate: addTodo, deleteTemplate: deleteTodo } =
  templateSlice.actions;
export default templateSlice.reducer;
