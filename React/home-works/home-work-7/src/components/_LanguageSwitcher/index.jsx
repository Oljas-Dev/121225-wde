import { useLanguage } from "../../context/useLanguageContext";
import styles from "./styles.module.css";

function LanguageSwitcher() {
  const { toggleLanguage, language } = useLanguage();

  return (
    <button onClick={toggleLanguage} className={styles.container}>
      {language === "en" ? "Change Language" : "Сменить язык"}
    </button>
  );
}

export default LanguageSwitcher;
