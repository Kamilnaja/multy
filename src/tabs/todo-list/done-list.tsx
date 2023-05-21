import { useSelector } from "react-redux"
import { todosDoneSelector } from "~tabs/store/store"
import Todo from "./todo"

export default function DoneList() {
  const todos = useSelector(todosDoneSelector)

  const todosList = todos.map((todo) => <Todo todo={todo}></Todo>)

  return (
    <>
      <div className="text-2xl font-bold mb-4 p-2">
        Done: {todosList.length}
      </div>
      <ul>{todosList}</ul>
    </>
  )
}