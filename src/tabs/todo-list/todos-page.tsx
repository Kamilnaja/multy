import AddTodo from "./add-todo"
import DoneList from "./done-list"
import TodoList from "./todo-list"

function TodosPage() {
  return (
    <>
      <AddTodo></AddTodo>
      <TodoList></TodoList>
      <DoneList></DoneList>
    </>
  )
}

export default TodosPage
