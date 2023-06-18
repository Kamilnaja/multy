import type { AppSlice } from "../../store/app-slice.model";

export const todosSelector = (state: AppSlice): Todo[] => {
  return Object.values(state.todoSlice.todos).sort(
    (a, b) => a.dateChanged - b.dateChanged
  );
};

export const todosDoneSelector = (state: AppSlice): Todo[] => {
  return todosSelector(state).filter((todo: Todo) => todo.isDone);
};

export const todosNotDoneSelector = (state: AppSlice): Todo[] => {
  return todosSelector(state).filter((todo: Todo) => !todo.isDone);
};

export const todosDoneToday = (state: AppSlice): Todo[] => {
  const today = new Date().toDateString();
  return todosDoneSelector(state).filter(
    (todo) => today === new Date(todo.dateFinished).toDateString()
  );
};
