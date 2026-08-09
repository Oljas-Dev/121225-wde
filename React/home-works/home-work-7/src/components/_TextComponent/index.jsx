import { useLanguage } from "../../context/useLanguageContext";
import styles from "./styles.module.css";

function TextComponent() {
  const { language } = useLanguage();

  return (
    <h2 className={styles.container}>
      {language === "en"
        ? "English language was chosen"
        : "Выбран английский язык"}
    </h2>
  );
}

export default TextComponent;
