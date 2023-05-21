import { useSelector } from "react-redux"
import type { TodoState } from "./todo-list.slice"

export default function TodoList() {
  const todos = useSelector((state: TodoState) => state.todo.todos)
  let todosList = todos.map((todo) => {
    return (
      <li>
        <div>{todo.id}</div>
        <div>{todo.description}</div>
        <div>{todo.isDone}</div>
        <div>{todo.priority}</div>
        <div>{todo.notes}</div>
      </li>
    )
  })

  return (
    <>
      <div>Todolist 5</div>
      <ul>{todosList}</ul>
    </>
  )
}
