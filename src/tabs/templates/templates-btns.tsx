import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "~tabs/todo-list/todo-list.slice";
import type { Template } from "./templates.slice";

type TemplateBtnsProps = {
  todos: Template["todos"];
};

export default function TemplatesBtns({ todos }: TemplateBtnsProps) {
  const dispatch = useDispatch();

  const handleAddToTodos = (): void => {
    const groupId = uuidv4();

    Object.values(todos).forEach((todo) => {
      dispatch(
        addTodo({
          description: todo.description,
          priority: todo.priority,
          isDone: false,
          id: uuidv4(),
          groupId: groupId
        })
      );
    });
  };

  return (
    <div className="flex justify-end absolute right-0">
      <button className="pr-2" onClick={handleAddToTodos}>
        Add to todos
      </button>
      <button className="pr-2">Edit</button>
      <button className="">Archive</button>
    </div>
  );
}
