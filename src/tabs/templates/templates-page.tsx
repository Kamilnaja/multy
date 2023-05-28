import { useSelector } from "react-redux";
import SectionDivider from "~tabs/section-divider/section-divider";
import { templatesSelector } from "~tabs/store/selectors/template-selector";
import TemplatesBtns from "./templates-btns";
import TemplatesTodos from "./templates-todos";
import { type Template } from "./templates.slice";

function TemplatesPage() {
  const templates = useSelector(templatesSelector);

  const templatesList = templates.map((template: Template) => (
    <li
      key={template.id}
      className="max-w-sm p-6 border border-gray-200 rounded-lg mb-2 ml-2">
      <div className="relative">
        <TemplatesBtns></TemplatesBtns>
        <div>
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-800">
            {template.title} {template.id}
          </h3>
          <span className="mb-3 font-normal text-gray-700">
            {template.description}
          </span>
        </div>
        <TemplatesTodos template={template}></TemplatesTodos>
      </div>
    </li>
  ));

  return (
    <>
      <div className="flex justify-end flex-row pr-4">
        <button className="cursor-pointer bg-transparent hover:bg-blue-700 text-blue-500 hover:text-white font-bold py-1 px-4 rounded border border-blue-500">
          Add new template
        </button>
      </div>
      <SectionDivider
        title="Templates"
        count={templates.length}></SectionDivider>
      <ul>{templatesList}</ul>
    </>
  );
}

export default TemplatesPage;
