import { useSelector } from "react-redux";
import SectionDivider from "~tabs/section-divider/section-divider";
import { todosNotDoneSelector } from "~tabs/store/store";
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
