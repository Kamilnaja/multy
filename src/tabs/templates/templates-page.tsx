import { useState } from "react";
import { useSelector } from "react-redux";
import SectionDivider from "~tabs/shared/section-divider/section-divider";
import { templatesSelector } from "~tabs/templates/store/template-selector";
import { type Template } from "./store/templates.slice";
import TemplateDialog from "./template-dialog";
import TemplatesBtns from "./templates-btns";
import TemplatesTodos from "./templates-todos";

function TemplatesPage() {
  const [showModal, setShowModal] = useState(false);
  const templates = useSelector(templatesSelector);

  const templatesList = templates.map((template: Template) => (
    <li
      key={template.id}
      className="max-w-sm p-6 border border-gray-200 rounded-lg mb-2 ml-2">
      <div className="relative">
        <TemplatesBtns template={template}></TemplatesBtns>
        <div>
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-800">
            {template.name}
          </h3>
          <p className="">{template.description}</p>
        </div>
        <TemplatesTodos template={template}></TemplatesTodos>
      </div>
    </li>
  ));

  return (
    <>
      <div className="flex justify-end flex-row pr-4">
        <button
          className="cursor-pointer bg-transparent hover:bg-blue-700 text-blue-500 hover:text-white font-bold py-1 px-4 rounded border border-blue-500"
          onClick={() => {
            setShowModal(true);
          }}>
          Add new template
        </button>
      </div>
      <SectionDivider
        title="Templates"
        count={templates.length}></SectionDivider>
      <ul>{templatesList}</ul>
      {showModal && (
        <TemplateDialog setOpenModal={setShowModal}></TemplateDialog>
      )}
    </>
  );
}

export default TemplatesPage;
