function ListsComponent({ orderedList, unorderedList }) {
  return (
    <div>
      <ol>
        {orderedList.map((text, i) => (
          <li key={i}>{text}</li>
        ))}
      </ol>

      <ul>
        {unorderedList.map((text, i) => (
          <li key={i}>{text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListsComponent;
