import type { Template } from "~tabs/templates/templates.slice";

export interface AppSlice {
  todoSlice: TodoState;
  templateSlice: TemplatesState;
}

export interface TodoState {
  todos: Record<Todo["id"], Todo>;
}

export interface TemplatesState {
  templates: Record<Template["id"], Template>;
}
