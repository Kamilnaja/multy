import { useSelector } from "react-redux";
import { templatesSelector } from "~tabs/store/store";
import { type Template } from "./templates.slice";

function Templates() {
  const templates = useSelector(templatesSelector);

  const templatesList = templates.map((template: Template) => (
    <li key={template.id}>
      <div>
        <div>{template.id}</div>
        <div>{template.title}</div>
        <div>{template.description}</div>
      </div>
      <ul>
        {template.todos.map((todo) => (
          <li className="flex border p-4" key={todo.id}>
            <div>{todo.id + template.id}</div>
            <div>{todo.description}</div>
            <div>{todo.priority}</div>
          </li>
        ))}
      </ul>
    </li>
  ));

  return (
    <>
      <div className="text-2xl font-bold mb-4 p-2">
        Templates: {templates.length}
      </div>
      <ul>{templatesList}</ul>
    </>
  );
}

export default Templates;
