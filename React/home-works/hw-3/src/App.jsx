import List from "./components/list";
import Ratings from "./components/ratings";

import style from "./app.module.css";

function App() {
  return (
    <div className={style.positioning}>
      <h2>Задание 1</h2>
      <Ratings />
      <h2>Задание 2</h2>
      <List />
    </div>
  );
}

export default App;
