import styles from "./styles.module.css";

function CityPicture({ city }) {
  return (
    <div className={styles.container}>
      <h3>{city.name}</h3>
      <img src={city.imgUrl} alt={city.name.toLowerCase()} />
    </div>
  );
}

export default CityPicture;
