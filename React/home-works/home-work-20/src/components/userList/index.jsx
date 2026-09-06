import { useSelector } from "react-redux";

const UserList = () => {
  const users = useSelector((state) => state.users.users);

  return (
    <>
      <h2>Список пользователей</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>Имя: {user.name}</p>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;
