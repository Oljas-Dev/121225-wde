import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./redux/slices/todosSlice";
import { deleteTodo } from "./redux/slices/todosSlice";
import { completeTodo } from "./redux/slices/todosSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  const { data, status, error } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  console.log(data);

  return (
    <div>
      <button onClick={() => dispatch(fetchTodos())}>get todos</button>

      {data.map((todo) => {
        return (
          <div key={todo.id}>
            <span style={{ fontWeight: "bold" }}>{todo.title}</span>
            <p>Completed: {todo.completed ? "Yes" : "No"}</p>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              delete
            </button>
            <button onClick={() => dispatch(completeTodo(todo.id))}>
              completed
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
