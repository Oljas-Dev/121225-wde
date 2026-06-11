import { useState } from "react";

import style from "./index.module.css";

function List() {
  const [people, setPeople] = useState([
    { id: 1, name: "Иван", age: 20 },

    { id: 2, name: "Мария", age: 22 },

    { id: 3, name: "Алексей", age: 21 },

    { id: 4, name: "Марина", age: 19 },

    { id: 5, name: "Даша", age: 23 },

    { id: 6, name: "Глеб", age: 24 },

    { id: 7, name: "Дима", age: 18 },

    { id: 8, name: "Гриша", age: 20 },

    { id: 9, name: "Серафим", age: 21 },
  ]);

  function handleAgeDescription(age) {
    const lastDigit = age % 10;
    const lastTwoDigits = age % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
      return "лет";
    }

    if (lastDigit === 1) {
      return "год";
    }

    if (lastDigit >= 2 && lastDigit <= 4) {
      return "года";
    }

    return "лет";
  }

  function handleDelete(i) {
    const filteredPeople = people.filter((_person, index) => index !== i);
    setPeople(filteredPeople);
  }

  return (
    <ul className={style.positioning}>
      {people.map((person, i) => {
        return (
          <li className={style.card} key={`card-${i}`}>
            <div className={style.card_elements}>
              <div className={style.flex}>
                <p>{person.name}</p>
                <p>
                  {person.age} {handleAgeDescription(person.age)}
                </p>
              </div>
              <button onClick={() => handleDelete(i)}>delete</button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
