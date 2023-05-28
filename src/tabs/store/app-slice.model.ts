import type { TemplateState } from "./template-slice.model";
import type { TodoState } from "./todo-slice.model";

export interface AppSlice {
  todoSlice: TodoState;
  templateSlice: TemplateState;
}
