import styles from "./styles.module.css";

function CityFactsCard({ cityFact }) {
  return <li className={styles.container}>{cityFact}</li>;
}

export default CityFactsCard;
