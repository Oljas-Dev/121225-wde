import snapchat from "../../assets/snapchat.svg";
import facebook from "../../assets/facebook.svg";
import x from "../../assets/twitter-x.svg";
import styles from "./styles.module.css";

const Contacts = () => {
  return (
    <section className={styles.contacts}>
      <div className={styles.info}>
        <h1>Контакты</h1>

        <ul>
          <li>Телефон: +49 123 456789</li>
          <li>Email: example@mail.com</li>
        </ul>

        <form>
          <input type="email" placeholder="Введите ваш email" />

          <input type="text" placeholder="Введите ваше имя" />

          <input type="text" placeholder="Введите сообщение" />

          <button type="submit">Отправить</button>
        </form>
      </div>

      <div className={styles.socials}>
        <p>Найдите нас на:</p>

        <a href="https://www.snapchat.com" target="_blank" rel="noreferrer">
          <img src={snapchat} alt="Snapchat" />
        </a>

        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <img src={facebook} alt="Facebook" />
        </a>

        <a href="https://x.com" target="_blank" rel="noreferrer">
          <img src={x} alt="X" />
        </a>
      </div>
    </section>
  );
};

export default Contacts;
