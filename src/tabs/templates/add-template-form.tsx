import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import type { TodoState } from "~tabs/todo-list/store/todo-state.model";
import { addTemplate, type Template } from "./store/templates.slice";

const AddTemplateForm = () => {
  const dispatch = useDispatch();
  const [inputFields, setInputFields] = useState([
    {
      description: ""
    }
  ]);

  const [template, setTemplate] = useState<Template>({
    name: "",
    description: "",
    todos: {},
    id: uuidv4()
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setTemplate((prevTemplate) => ({ ...prevTemplate, [name]: value }));
  };

  const handleFormChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };

  const handleAddTemplate = () => {
    const todos: TodoState["todos"] = inputFields.reduce((result, item) => {
      const id = uuidv4();

      if (item.description.trim() !== "") {
        result[id] = {
          id,
          description: item.description.trim(),
          notes: "",
          priority: "High",
          isDone: false,
          dateChanged: new Date().toISOString()
        };
      }

      return result;
    }, {});

    template.todos = todos;

    dispatch(addTemplate(template));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleAddFields();
    }
  };

  const handleAddFields = () => {
    setInputFields([...inputFields, { description: "" }]);
  };

  return (
    <div className="mx-auto">
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
            placeholder="What should be done"
            value={inputField.description}
            onChange={(event) => handleFormChange(index, event)}
            onKeyDown={handleKeyDown}
            className="w-full border border-gray-300 rounded-md py-2 px-3 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      ))}
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        onClick={handleAddTemplate}>
        Add Template
      </button>
    </div>
  );
};

export default AddTemplateForm;
