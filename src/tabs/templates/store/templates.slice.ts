import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import type { TemplateState } from "~tabs/templates/store/template-slice.model";
import type { TodoState } from "~tabs/todo-list/store/todo-state.model";

export interface Template {
  id: string;
  title: string;
  description: string;
  todos: TodoState["todos"];
}

const initialState: TemplateState = {
  templates: {
    1: {
      id: uuidv4(),
      title: "React",
      description: "Learn React",
      todos: {
        1: {
          id: uuidv4(),
          description: "Learn React",
          notes: "Learn React Hooks and Redux",
          priority: "High",
          isDone: false,
          dateChanged: 0
        },
        2: {
          id: uuidv4(),
          description: "Learn React Router",
          notes: "Learn React Router",
          priority: "High",
          isDone: false,
          dateChanged: 0
        }
      }
    },
    2: {
      id: uuidv4(),
      title: "Redux",
      description: "Learn Redux",
      todos: {
        1: {
          id: uuidv4(),
          description: "Learn Redux",
          notes: "Learn Redux",
          priority: "High",
          isDone: false,
          dateChanged: 0
        },
        2: {
          id: uuidv4(),
          description: "Learn Redux Toolkit",
          notes: "Learn Redux Toolkit",
          priority: "High",
          isDone: false,
          dateChanged: 0
        },
        3: {
          id: uuidv4(),
          description: "Learn Redux Thunk",
          notes: "Learn Redux Thunk",
          priority: "High",
          isDone: false,
          dateChanged: 0
        }
      }
    }
  }
};

export const templateSlice = createSlice({
  name: "templates",
  initialState,
  reducers: {
    addTemplate: (state: TemplateState, action: PayloadAction<Template>) => {
      state.templates[action.payload.id] = action.payload;
    },
    deleteTemplate: (state, action: PayloadAction<Template>) => {
      const { id } = action.payload;
      const templates = { ...state.templates };
      delete templates[id];
      state.templates = templates;
    }
  }
});

export const { addTemplate, deleteTemplate } = templateSlice.actions;
export default templateSlice.reducer;
