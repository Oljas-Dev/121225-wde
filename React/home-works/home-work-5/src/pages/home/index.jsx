import Header from "../../components/header";
import Main from "../../components/main";
import styles from "./styles.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
    </div>
  );
}

export default Home;
