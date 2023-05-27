import { useSelector } from "react-redux";
import { todosDoneSelector } from "~tabs/store/store";
import Todo from "./todo";

export default function DoneList() {
  const todos = useSelector(todosDoneSelector);

  const todosList = todos.map((todo) => (
    <Todo todo={todo} key={todo.id}></Todo>
  ));

  return (
    <>
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
          Done: {todosList.length}
        </span>
      </div>

      <ul>{todosList}</ul>
    </>
  );
}
