import styles from "./styles.module.css";

import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/posts");
  }

  return (
    <div className={styles.home}>
      <h1>Добро пожаловать в мой блог</h1>

      <p>Здесь вы можете читать интересные статьи о React и веб-разработке.</p>

      <button onClick={handleClick}>Смотреть статьи</button>
    </div>
  );
}

export default Home;
