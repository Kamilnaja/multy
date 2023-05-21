import { Route, Routes } from "react-router-dom"
import NoPage from "./no-page"
import Options from "./options"
import Stats from "./stats"
import Templates from "./templates"
import TodoList from "./todolist"

function Routing() {
  return (
    <Routes>
      <Route index element={<TodoList />} />
      <Route path="templates" element={<Templates />} />
      <Route path="stats" element={<Stats />} />
      <Route path="options" element={<Options />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  )
}

export default Routing
