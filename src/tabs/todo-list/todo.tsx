interface TodoProps {
  todo: Todo
}

export default function Todo({ todo }: TodoProps) {
  return (
    <li className="flex border p-4" key={todo.id}>
      <div className="flex-grow flex-shrink-0">{todo.priority}</div>
      <div className="flex-grow flex-shrink-0">{todo.description}</div>
    </li>
  )
}
