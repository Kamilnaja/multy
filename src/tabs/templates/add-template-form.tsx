import { useState } from "react";
import type { Template } from "./store/templates.slice";

const AddTemplateForm = () => {
  const [inputFields, setInputFields] = useState([
    {
      description: ""
    }
  ]);
  const [template, setTemplate] = useState<Template>({
    name: "",
    description: "",
    todos: {},
    id: new Date().getTime()
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

  const handleFormChange = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };

  const handleAddFields = () => {};

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
      {inputFields.map((inputField, index) => (
        <div key={index}>
          <input
            name="description"
            placeholder="task description"
            value={inputField.description}
            onChange={(event) => handleFormChange(index, event)}
          />
        </div>
      ))}
      <input />
      <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        Add Task
      </button>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        Add Template
      </button>
    </form>
  );
};

export default AddTemplateForm;
