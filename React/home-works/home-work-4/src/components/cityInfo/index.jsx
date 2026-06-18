import CityFactsCard from "../cityFactsCard";
import styles from "./styles.module.css";

function CityInfo({ city }) {
  return (
    <div className={styles.container}>
      <p>{city.description}</p>

      <ul>
        {city.facts.map((fact, i) => (
          <CityFactsCard cityFact={fact} key={`fact#${i}`} />
        ))}
      </ul>
    </div>
  );
}

export default CityInfo;
