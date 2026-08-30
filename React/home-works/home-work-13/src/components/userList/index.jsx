import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import UserItem from "../userItem";

function UserList() {
  const users = useSelector((state) => state.users);
  const filter = useSelector((state) => state.filter);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div className={styles.userList}>
      <h2>Список пользователей</h2>

      <ul>
        {filteredUsers.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}

export default UserList;
