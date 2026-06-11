import CardItem from "./CardItem";
import "./CardList.css";

function CardsList({ teams }) {
  return (
    <div>
      {teams.map((team, i) => (
        <CardItem name={team.name} members={team.members} key={i} />
      ))}
    </div>
  );
}

export default CardsList;
