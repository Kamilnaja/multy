import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "./todo-list.slice";

interface TodoProps {
  todo: Todo;
}

export default function Todo({ todo }: TodoProps) {
  const dispatch = useDispatch();

  const onDeleteClicked = () => {
    dispatch(deleteTodo(todo.id));
  };

  const onDoneClicked = () => {
    dispatch(toggleTodo(todo.id));
  };

  return (
    <li className="flex border p-4" key={todo.id}>
      <div className="flex-grow grow-0 pr-2 flex-shrink-0">{todo.priority}</div>
      <div className="flex-grow flex-shrink-0">{todo.description}</div>
      {!todo.isDone && (
        <>
          <div className="cursor-pointer pr-1" onClick={onDeleteClicked}>
            Delete
          </div>
        </>
      )}
      <div className="cursor-pointer" onClick={onDoneClicked}>
        {todo.isDone ? "Undone" : "Done"}
      </div>
    </li>
  );
}
