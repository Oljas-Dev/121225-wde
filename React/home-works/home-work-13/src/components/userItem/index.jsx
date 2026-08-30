import styles from "./styles.module.css";

function UserItem({ user }) {
  return <li className={styles.userItem}>{user.name}</li>;
}

export default UserItem;
