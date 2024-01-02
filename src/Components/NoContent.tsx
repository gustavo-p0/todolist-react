import styles from "./NoContent.module.css";
import clipboard from "../assets/clipboard.svg";
function NoContent() {
  return (
    <div className={styles["c-no-content"]}>
      <img
        src={clipboard}
        alt="Prancheta vazia"
        className={styles["c-no-content__image"]}
      />
      <p>Você ainda não tem taredas cadastradas.</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}

export { NoContent };
