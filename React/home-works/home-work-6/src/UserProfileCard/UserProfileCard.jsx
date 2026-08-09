import styles from "./styles.module.css";

function UserProfileCard({ user, fetchUser, isLoading }) {
  if (!user || isLoading) {
    return (
      <article className={styles.containerLoader}>
        <p>Loading...</p>
      </article>
    );
  }

  const receivedUser = user.results[0].user;

  const fullName =
    capitalizeFirst(receivedUser.name.first) +
    " " +
    capitalizeFirst(receivedUser.name.last);

  function capitalizeFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  return (
    <article className={styles.container}>
      <img src={receivedUser.picture.large} alt="user picture" />
      <h2>{fullName}</h2>
      <p>Email: {receivedUser.email}</p>
      <p>Phone: {receivedUser.phone}</p>
      <button onClick={fetchUser}>load new user</button>
    </article>
  );
}

export default UserProfileCard;
