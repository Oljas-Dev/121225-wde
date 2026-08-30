import { useState } from "react";
import "./App.css";
import ValueDisplay from "./ValueDisplay";

function App() {
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className="app">
      <h1>Отслеживание значения</h1>

      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Введите текст"
      />

      <ValueDisplay value={value} />
    </div>
  );
}

export default App;
