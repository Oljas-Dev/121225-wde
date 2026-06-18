import CityCard from "../../components/cityCard";
import styles from "./styles.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <CityCard />
    </div>
  );
}

export default Home;
