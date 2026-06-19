import SigInCardList from "../signInCardList";
import styles from "./styles.module.css";

function Main() {
  return (
    <div className={styles.container}>
      <h1>LIFE IS WASTED ON THE LIVING</h1>
      <h2>
        Sign in <br />
        with
      </h2>
      <SigInCardList />
    </div>
  );
}

export default Main;
