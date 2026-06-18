import styles from "./styles.module.css";

function CitySelector({ options, setCurrentCity, currentCity }) {
  return (
    <div className={styles.container}>
      <h2>Choose city:</h2>
      <select
        id="chooseCity"
        value={currentCity}
        onChange={(e) => setCurrentCity(e.target.value)}
      >
        {options.map((option) => {
          return (
            <option value={option.name} key={option.name}>
              {option.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default CitySelector;
