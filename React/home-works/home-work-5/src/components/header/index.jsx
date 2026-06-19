import styles from "./styles.module.css";

// spotify icon
import spotify from "./../../assets/icons/logo.svg";

function Header() {
  return (
    <header className={styles.container}>
      <img src={spotify} alt="spotify logo" />
    </header>
  );
}

export default Header;
