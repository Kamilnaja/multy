import type { TemplateState } from "../templates/store/template-slice.model";
import type { TodoState } from "../todo-list/store/todo-state.model";

export interface AppSlice {
  todoSlice: TodoState;
  templateSlice: TemplateState;
}
