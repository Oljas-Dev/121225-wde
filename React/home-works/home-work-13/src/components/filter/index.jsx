import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import { setFilter } from "../../redux/actions";

function Filter() {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.filter);

  function handleChange(event) {
    dispatch(setFilter(event.target.value));
  }

  return (
    <div className={styles.filter}>
      <input
        type="text"
        placeholder="Поиск пользователя..."
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}

export default Filter;
