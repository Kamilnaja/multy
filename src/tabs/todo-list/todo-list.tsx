import { useSelector } from "react-redux"
import type { TodoState } from "./todo-list.slice"

export default function TodoList() {
  const todos = useSelector((state: TodoState) => state.todo.todos)
  let notDone = todos.filter((todo) => !todo.isDone)
  let done = todos.filter((todo) => todo.isDone)

  const todosList = getList(notDone)
  const doneList = getList(done)

  return (
    <>
      <div className="text-2xl font-bold mb-4 p-2">
        Todo: {todosList.length}
      </div>
      <ul>{todosList}</ul>
      <div className="text-2xl font-bold mb-4 p-2">Done: {doneList.length}</div>
      <ul>{doneList}</ul>
    </>
  )
}

function getList(todos: Todo[]) {
  return todos.map((todo) => {
    return (
      <li className="flex border p-4" key={todo.id}>
        <div className="flex-grow flex-shrink-0">{todo.priority}</div>
        <div className="flex-grow flex-shrink-0">{todo.description}</div>
      </li>
    )
  })
}
