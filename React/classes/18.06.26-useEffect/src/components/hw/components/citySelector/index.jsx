import styles from "./styles.module.css";

function CitySelector({ options, setCurrentCity, currentCity }) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className={styles.container}>
      <h2>Choose city:</h2>
      <form onSubmit={handleSubmit}>
        <select
          id="chooseCity"
          defaultValue={currentCity}
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
      </form>
    </div>
  );
}

export default CitySelector;
