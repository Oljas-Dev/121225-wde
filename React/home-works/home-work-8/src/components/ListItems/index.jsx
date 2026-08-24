import { useEffect, useState } from "react";

function ListItems() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function addItem() {
    setItems((prev) => [...prev, inputValue]);
    console.log(items);
    setInputValue("");
  }

  useEffect(() => {
    addItem();
  }, []);

  return (
    <main>
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />

      <ul>
        {items.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </main>
  );
}

export default ListItems;
