import type { Template } from "~tabs/templates/templates.slice";
import type { AppSlice } from "../app-slice.model";

export const templatesSelector = (state: AppSlice): Template[] => {
  return Object.values(state.templateSlice.templates);
};

// selector for getting a template todo by id
export const templateTodoSelector = (state: AppSlice, templateId: number) => {
  return Object.values(state.templateSlice.templates[templateId].todos);
};
