import { useCallback, useMemo, useState } from "react";
import "./App.css";
import UserList from "./components/userList";

const userList = [
  { id: 1, name: "John" },
  { id: 2, name: "Anna" },
  { id: 3, name: "Michael" },
  { id: 4, name: "Kate" },
  { id: 5, name: "Alex" },
  { id: 6, name: "Andrew" },
];

function App() {
  const [filter, setFilter] = useState("");

  const filterUsers = useCallback((filterText) => {
    return userList.filter((user) =>
      user.name.toLowerCase().includes(filterText.toLowerCase()),
    );
  }, []);

  const filteredUsers = useMemo(() => {
    return filterUsers(filter);
  }, [filter, filterUsers]);

  return (
    <div className="app">
      <h1>User List</h1>

      <input
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Search users..."
      />

      <UserList users={filteredUsers} />
    </div>
  );
}

export default App;
