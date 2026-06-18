import CitySelector from "../citySelector";
import styles from "./styles.module.css";
import { cityData } from "../../assets/data/arrays";

function ChooseCity({ cityName, setCityName }) {
  return (
    <div className={styles.container}>
      <CitySelector
        options={cityData}
        setCurrentCity={setCityName}
        currentCity={cityName}
      />
    </div>
  );
}

export default ChooseCity;
