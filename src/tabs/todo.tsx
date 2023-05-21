import "~base.css"
import "~style.css"
import Menu from "./menu"
import TodoList from "./todolist"

export default function Todo() {
  return (
    <div className="flex flex-col p-4">
      <Menu></Menu>
      <TodoList></TodoList>
    </div>
  )
}
