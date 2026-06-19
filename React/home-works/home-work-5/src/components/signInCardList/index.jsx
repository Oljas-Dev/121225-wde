import SignInCard from "../signInCard";
import styles from "./styles.module.css";

// icons
import appleIcon from "./../../assets/icons/apple.svg";
import googleIcon from "./../../assets/icons/google.svg";
import xIcon from "./../../assets/icons/x.svg";

const oAuthOptions = [
  {
    img: appleIcon,
    oAuth: "apple",
  },
  {
    img: googleIcon,
    oAuth: "google",
  },
  {
    img: xIcon,
    oAuth: "x",
  },
];

function SigInCardList() {
  return (
    <ul className={styles.container}>
      {oAuthOptions.map((option) => {
        return <SignInCard card={option} key={option.oAuth} />;
      })}
    </ul>
  );
}
export default SigInCardList;
