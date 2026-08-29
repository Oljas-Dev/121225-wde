import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

function Navigation() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/">Главная</NavLink>

      <NavLink to="/posts">Статьи</NavLink>
    </nav>
  );
}

export default Navigation;
