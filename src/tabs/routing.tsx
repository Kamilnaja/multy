import { Route, Routes } from "react-router-dom";
import NoPage from "./no-page";
import Options from "./options/options";
import Stats from "./stats/stats";
import TemplatesPage from "./templates/templates-page";
import TodosPage from "./todo-list/todos-page";

function Routing() {
  return (
    <Routes>
      <Route index element={<TodosPage />} />
      <Route path="templates" element={<TemplatesPage />} />
      <Route path="stats" element={<Stats />} />
      <Route path="options" element={<Options />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}

export default Routing;
