import { useSelector } from "react-redux";
import SectionDivider from "~tabs/shared/section-divider/section-divider";
import { todosNotDoneSelector } from "~tabs/todo-list/store/todo-selectors";
import TodoSubtasks from "./todo-subtask";

export default function TodoList() {
  const todos = useSelector(todosNotDoneSelector);
  const todosList = todos.map((todo) => (
    // <Todo todo={todo} key={todo.id}></Todo>
    <TodoSubtasks todo={todo} key={todo.id}></TodoSubtasks>
  ));

  return (
    <>
      <SectionDivider title="Todo" count={todosList.length}></SectionDivider>
      <ul>{todosList}</ul>
    </>
  );
}
