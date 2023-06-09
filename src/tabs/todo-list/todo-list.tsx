import { useSelector } from "react-redux";
import SectionDivider from "~tabs/shared/section-divider/section-divider";
import { todosNotDoneSelector } from "~tabs/todo-list/store/todo-selectors";
import Todo from "./todo";

export default function TodoList() {
  const todos = useSelector(todosNotDoneSelector);
  const todosList = todos.map((todo) => (
    <Todo todo={todo} key={todo.id}></Todo>
  ));

  return (
    <>
      <SectionDivider title="Todo" count={todosList.length}></SectionDivider>
      <ul>{todosList}</ul>
    </>
  );
}
