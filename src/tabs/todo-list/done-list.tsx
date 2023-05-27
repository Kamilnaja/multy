import { useSelector } from "react-redux";
import { todosDoneSelector } from "~tabs/store/store";
import SectionDivider from "./../section-divider/section-divider";
import Todo from "./todo";

export default function DoneList() {
  const todos = useSelector(todosDoneSelector);

  const todosList = todos.map((todo) => (
    <Todo todo={todo} key={todo.id}></Todo>
  ));

  return (
    <>
      <SectionDivider title="Done" count={todosList.length} />
      <ul>{todosList}</ul>
    </>
  );
}
