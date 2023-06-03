import type { TodoState } from "~tabs/todo-list/store/todo-state.model";

export interface Template {
  id: number;
  title: string;
  description: string;
  todos: TodoState["todos"];
}
