import AddTodo from "./add-todo";
import DoneCounter from "./done-counter";
import DoneList from "./done-list";
import TodoList from "./todo-list";

function TodosPage() {
  return (
    <>
      <DoneCounter></DoneCounter>
      <AddTodo></AddTodo>
      <TodoList></TodoList>
      <DoneList></DoneList>
    </>
  );
}

export default TodosPage;
