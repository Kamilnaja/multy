import { useState } from 'react';
import { useDispatch } from "react-redux";
import { Select } from "./select";
import { deleteTodo, editTodo, toggleTodo } from "./store/todo-list.slice";

interface TodoProps {
  todo: Todo;
}

export default function Todo({ todo }: TodoProps) {
  const [newTodo, setTodo] = useState(todo);

  const dispatch = useDispatch();

  const onDeleteClicked = () => {
    dispatch(deleteTodo(todo));
  };

  const onDoneClicked = () => {
    dispatch(toggleTodo(todo));
  };

  const dispatchChange = (todo: Todo) => {
    dispatch(editTodo(todo));
  };


  const handlePriorityChange = (selectedPriority: Todo['priority']) => {
    const todo = {
      ...newTodo,
      priority: selectedPriority
    }
    setTodo(todo)
    dispatchChange(todo);
  };


  const setContent = (description: Todo['description']) => {
    const todo = {
      ...newTodo,
      description
    }
    setTodo(todo)
    dispatchChange(todo);
  };

  return (
    <li
      className="flex flex-nowrap border p-2 items-center"
      key={todo.id}
      draggable>
      <span className="flex-grow grow-0 pr-2 flex-shrink-0">
        <Select priority={newTodo.priority} setPriority={handlePriorityChange}></Select>
      </span>
      <input
        className="flex-grow flex-shrink-0 pt-2 pb-2 pl-2 mr-4"
        onChange={(e) => setContent(e.target.value)}
        value={newTodo.description}
        type="text"
      />
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
