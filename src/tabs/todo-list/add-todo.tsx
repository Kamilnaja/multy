import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Select } from "./select";
import { addTodo } from "./store/todo-list.slice";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [priority, setPriority] = useState("A");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: uuidv4(),
        priority,
        description,
        isDone: false,
        dateChanged: new Date().getDate()
      })
    );

    setDescription("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSubmit(e);
    }
  };
  
  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex">
          {Select({ priority, setPriority })}
          <div className="flex-grow">
            <input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onKeyDown={handleKeyDown}></input>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
