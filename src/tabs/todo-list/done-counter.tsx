import { useSelector } from "react-redux";
import { todosDoneToday } from "./store/todo-selectors";

const doneCounter = () => {
  const todos = useSelector(todosDoneToday);

  return (
    <>
      <div className="pl-4">
        <span className="counter-label">Done Today: </span>
        <span className="counter-value">{todos.length}</span>
      </div>
    </>
  );
};

export default doneCounter;
