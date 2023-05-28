import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { PRIORITIES } from "./priority";
import { addTodo } from "./todo-list.slice";

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
        isDone: false
      })
    );

    setDescription("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSubmit(e);
    }
  };

  const prioritiesList = PRIORITIES.map((priority) => (
    <option key={priority}>{priority}</option>
  ));

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex">
          <div className="grow-0 pr-2">
            <label htmlFor="priority" className="block mb-1 font-medium">
              Priority
            </label>
            <select
              id="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required>
              {prioritiesList}
            </select>
          </div>
          <div className="flex-grow">
            <label htmlFor="description" className="block mb-1 font-medium">
              Description
            </label>
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
