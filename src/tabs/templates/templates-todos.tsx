import type { Template } from "./templates.slice";

type TemplatesTodosProps = {
  template: Template;
};

export default function TemplatesTodos({ template }: TemplatesTodosProps) {
  return (
    <>
      <div className="flex items-center justify-between mt-4 text-gray-900 mb-2">
        Todos
      </div>
      <ul>
        {Object.values(template.todos).map((todo) => (
          <li
            className="flex border p-4 dark:text-gray-400"
            key={`${todo.id}-${template.id}`}>
            <div>
              <h3 className="text-base font-bold tracking-tight text-gray-900">
                {todo.description}
              </h3>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
