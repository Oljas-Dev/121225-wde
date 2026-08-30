import styles from "./App.module.css";
import Filter from "./components/filter";
import UserList from "./components/userList";

function App() {
  return (
    <div className={styles.app}>
      <h1>Поиск пользователей</h1>

      <Filter />

      <UserList />
    </div>
  );
}

export default App;
