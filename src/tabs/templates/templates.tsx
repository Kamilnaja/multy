import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import SectionDivider from "~tabs/section-divider/section-divider";
import { templatesSelector } from "~tabs/store/selectors/template-selector";
import TemplatesTodos from "./templates-todos";
import { type Template } from "./templates.slice";

function Templates() {
  const templates = useSelector(templatesSelector);
  const [open, setOpen] = useState({ id: -1, isOpened: false });
  const menuRef = useRef(null);

  const toggleMenu = (id: number) => {
    if (open.id === id) {
      setOpen({ id, isOpened: !open.isOpened });
      return;
    }
    setOpen({ id, isOpened: true });
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpen({ id: -1, isOpened: false });
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const templatesList = templates.map((template: Template) => (
    <li
      key={template.id}
      className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-2 ml-2">
      <div ref={menuRef} className="relative">
        <div className="flex justify-end pt-2 absolute right-0">
          <button
            id="dropdownButton"
            data-dropdown-toggle="dropdown"
            className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none rounded-lg text-sm p-1.5"
            type="button"
            onClick={() => toggleMenu(template.id)}>
            <span className="sr-only">Open dropdown</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
            </svg>
          </button>
          {open.id === template.id && open.isOpened && (
            <div
              id="dropdown"
              className="z-10 absolute text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 top-0 right-10">
              <ul className="py-2" aria-labelledby="dropdownButton">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    Add to todos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    Edit
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    Archive
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div>
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
            {template.title} {template.id}
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
      <SectionDivider
        title="Templates"
        count={templates.length}></SectionDivider>
      <ul>{templatesList}</ul>
    </>
  );
}

export default Templates;
