import axios from "axios";
import { useEffect } from "react";

async function fetchTodos() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos",
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

function App() {
  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <div>
      <h1>{}</h1>
    </div>
  );
}
export default App;
