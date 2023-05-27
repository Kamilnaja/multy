import { useSelector } from "react-redux";
import { todosNotDoneSelector } from "~tabs/store/store";
import Todo from "./todo";

export default function TodoList() {
  const todos = useSelector(todosNotDoneSelector);
  const todosList = todos.map((todo) => (
    <Todo todo={todo} key={todo.id}></Todo>
  ));

  return (
    <>
      <div className="text-2xl font-bold mb-4 p-2">
        Todo: {todosList.length}
      </div>
      <ul>{todosList}</ul>
    </>
  );
}
