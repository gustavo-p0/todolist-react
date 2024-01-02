import styles from "./Task.module.css";
import trashImage from "../assets/trash.svg";
import { task } from "../App/App";

interface ITask {
  task: task;
  onToggleCheck: (id: string) => void;
  onDeleteCheck: (id: string) => void;
}
function Task({ task, onToggleCheck, onDeleteCheck }: ITask) {
  const handleToggleTaskCheck = (): void => {
    onToggleCheck(task.id);
  };

  const handleDeleteTask = (): void => {
    onDeleteCheck(task.id);
  };

  return (
    <article className={styles["c-task"]}>
      <label
        className={
          styles["c-task__check"] + " " + styles["c-task__check--marked"]
        }
      >
        <p className={styles["c-task__check__marker"]}>✔</p>
        <input
          type="checkbox"
          onChange={handleToggleTaskCheck}
          checked={task.checked}
        />
      </label>
      <p className={styles["c-task__text"]}>{task.content}</p>
      <button className={styles["c-task__delete"]} onClick={handleDeleteTask}>
        <img src={trashImage} alt="Lata de lixo" />
      </button>
    </article>
  );
}

export { Task };
