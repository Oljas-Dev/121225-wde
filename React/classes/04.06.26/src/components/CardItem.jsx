import "./CardItem.css";

function CardItem({ name, members }) {
  return (
    <div>
      <h3>{name}</h3>
      <ul>
        {members.map((member, i) => (
          <li key={i}>{member}</li>
        ))}
      </ul>
    </div>
  );
}

export default CardItem;
