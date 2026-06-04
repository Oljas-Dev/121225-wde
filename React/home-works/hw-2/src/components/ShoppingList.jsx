function ShoppingList({ items }) {
  return (
    <ul>
      {items
        ? items.map((item, i) => <li key={i}>{item}</li>)
        : "Список покупок пуст"}
    </ul>
  );
}

export default ShoppingList;
