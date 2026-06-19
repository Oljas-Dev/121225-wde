import styles from "./styles.module.css";

function SignInCard({ card }) {
  return (
    <li className={styles.container}>
      <a href="#">
        <img src={card.img} alt={card.oAuth} />
      </a>
    </li>
  );
}

export default SignInCard;
