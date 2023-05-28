import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "./todo-list.slice";

interface TodoProps {
  todo: Todo;
}

export default function Todo({ todo }: TodoProps) {
  const dispatch = useDispatch();

  const onDeleteClicked = () => {
    dispatch(deleteTodo(todo));
  };

  const onDoneClicked = () => {
    dispatch(toggleTodo(todo));
  };

  return (
    <li className="flex border p-4" key={todo.id}>
      <div className="flex-grow grow-0 pr-2 flex-shrink-0">{todo.priority}</div>
      <div className="flex-grow flex-shrink-0">{todo.description}</div>
      <div className="pr-2">{todo?.groupId}</div>
      {!todo.isDone && (
        <>
          <button
            className="cursor-pointer mr-2 bg-yellow-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
            onClick={onDeleteClicked}>
            Delete
          </button>
        </>
      )}
      <button
        className="cursor-pointer bg-transparent hover:bg-blue-700 text-blue-500 hover:text-white font-bold py-1 px-4 rounded border border-blue-500"
        onClick={onDoneClicked}>
        {todo.isDone ? "Undone" : "Done"}
      </button>
    </li>
  );
}
