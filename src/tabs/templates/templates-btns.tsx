import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "~tabs/todo-list/store/todo-list.slice";
import { deleteTemplate, type Template } from "./store/templates.slice";

type TemplateBtnsProps = {
  template: Template;
};

export default function TemplatesBtns({ template }: TemplateBtnsProps) {
  const dispatch = useDispatch();

  const handleDelete = (): void => {
    dispatch(deleteTemplate(template));
  };

  const handleAddToTodos = (): void => {
    Object.values(template.todos).forEach((todo) => {
      dispatch(
        addTodo({
          description: todo.description,
          priority: todo.priority,
          isDone: false,
          id: uuidv4(),
          dateChanged: new Date().getTime()
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
      <button className="" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
