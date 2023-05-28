import { useSelector } from "react-redux";
import { templatesSelector } from "~tabs/store/selectors/template-selector";
import TemplatesTodos from "./templates-todos";
import { type Template } from "./templates.slice";

function Templates() {
  const templates = useSelector(templatesSelector);

  const templatesList = templates.map((template: Template) => (
    <li
      key={template.id}
      className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-2 ml-2">
      <div>
        <div>
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
            {template.title}
          </h3>
          <span className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {template.description}
          </span>
        </div>
        <TemplatesTodos template={template}></TemplatesTodos>
      </div>
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
