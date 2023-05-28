import type { AppSlice } from "../app-slice.model";

export const todosSelector = (state: AppSlice): Todo[] => {
  return Object.values(state.todoSlice.todos);
};

export const todosDoneSelector = (state: AppSlice): Todo[] => {
  return Object.values(state.todoSlice.todos).filter(
    (todo: Todo) => todo.isDone
  );
};

export const todosNotDoneSelector = (state: AppSlice): Todo[] => {
  return Object.values(state.todoSlice.todos).filter(
    (todo: Todo) => !todo.isDone
  );
};
