import { useState } from "react";
import ChooseCity from "../chooseCity";
import CityPicture from "../cityPicture";
import styles from "./styles.module.css";
import { cityData } from "../../assets/data/arrays";
import CityInfo from "../cityInfo";

function CityCard() {
  const [currentCityName, setCurrentCityName] = useState("Токио");

  const currentCity = cityData.find((city) => city.name === currentCityName);

  return (
    <div className={styles.container}>
      <ChooseCity cityName={currentCityName} setCityName={setCurrentCityName} />
      <CityPicture city={currentCity} />
      <CityInfo city={currentCity} />
    </div>
  );
}

export default CityCard;
