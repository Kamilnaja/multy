import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, toggleTodo } from "./store/todo-list.slice";

interface TodoProps {
  todo?: Todo;
}

export default function Todo({ todo }: TodoProps) {
  const [content, setContent] = useState(todo?.description);

  const dispatch = useDispatch();

  const onDeleteClicked = () => {
    dispatch(deleteTodo(todo));
  };

  const onDoneClicked = () => {
    dispatch(toggleTodo(todo));
  };

  const onContentChangeFinish = (e: any) => {
    const todo: Todo = {
      description: content,
      dateChanged: new Date().getTime(),
      id: e.target.dataset.id,
      isDone: false,
      priority: e.target.dataset.priority
    };
    dispatch(editTodo(todo));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      console.log("wchodzi");
      onContentChangeFinish(e);
      e.target.blur();
    }
  };

  return (
    <li
      className="flex flex-nowrap border p-2 items-center"
      key={todo?.id}
      draggable>
      <span className="flex-grow grow-0 pr-2 flex-shrink-0">
        {todo?.priority}
      </span>
      <input
        className="flex-grow flex-shrink-0"
        onChange={(e) => setContent(e.target.value)}
        onBlur={(e) => onContentChangeFinish(e)}
        value={content}
        onKeyDown={handleKeyDown}
        type="text"
        data-id={todo?.id}
        data-priority={todo?.priority}
      />

      {todo && (
        <>
          <button
            className="cursor-pointer bg-transparent hover:bg-blue-700 text-blue-500 hover:text-white font-bold py-1 px-4 rounded border border-blue-500"
            onClick={onDoneClicked}>
            {todo.isDone ? "Undone" : "Done"}
          </button>
          {!todo.isDone && (
            <>
              <button
                className="cursor-pointer mr-2 bg-yellow-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
                onClick={onDeleteClicked}>
                Delete
              </button>
            </>
          )}
        </>
      )}
    </li>
  );
}
