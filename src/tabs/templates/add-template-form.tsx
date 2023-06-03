import { useState } from "react";

interface Template {
  name: string;
  description: string;
  tasks: string[];
}

const AddTemplateForm = (props: any) => {
  const [template, setTemplate] = useState<Template>({
    name: "",
    description: "",
    tasks: []
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: Add logic to submit the new template
  }

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setTemplate((prevTemplate) => ({ ...prevTemplate, [name]: value }));
  }

  function handleTaskChange(
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const newTasks = [...template.tasks];
    newTasks[index] = event.target.value;
    setTemplate((prevTemplate) => ({ ...prevTemplate, tasks: newTasks }));
  }

  function handleAddTask() {
    setTemplate((prevTemplate) => ({
      ...prevTemplate,
      tasks: [...prevTemplate.tasks, ""]
    }));
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto">
      <label htmlFor="name" className="block mb-2">
        Name:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={template.name}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-md py-2 px-3 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <label htmlFor="description" className="block mb-2">
        Description:
      </label>
      <textarea
        id="description"
        name="description"
        value={template.description}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-md py-2 px-3 mb-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <div className="mb-2">
        <label htmlFor="tasks" className="block mb-2">
          Tasks:
        </label>
        {template.tasks.map((task, index) => (
          <>
            <input
              key={index}
              type="text"
              value={task}
              onChange={(event) => handleTaskChange(index, event)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </>
        ))}
        <button
          type="button"
          onClick={handleAddTask}
          className="flex items-center text-blue-500 hover:text-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v4h4a1 1 0 010 2h-4v4a1 1 0 01-2 0v-4H5a1 1 0 010-2h4V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          Add Task
        </button>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        Save template
      </button>
    </form>
  );
};

export default AddTemplateForm;
