import styles from "./Header.module.css";
import logo from "../assets/logo.svg";

function Header() {
  return (
    <header className={styles["c-header"]}>
      <img src={logo} alt="ToDo logo" className={styles["c-header__logo"]} />
    </header>
  );
}

export { Header };
