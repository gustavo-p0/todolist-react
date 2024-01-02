import { ReactNode } from "react";
import { DisplayHeading } from "./DisplayHeading";

import styles from "./TasksDisplay.module.css";

interface ITasksDisplay {
  qtyTasks: number;
  completedTasks: number;
  children: ReactNode;
}

function TasksDisplay({ qtyTasks, completedTasks, children }: ITasksDisplay) {
  return (
    <>
      <header className={styles["c-tasks-display__header"]}>
        <DisplayHeading value={String(qtyTasks)}>
          Tarefas criadas
        </DisplayHeading>
        <DisplayHeading
          value={
            qtyTasks === 0
              ? String(qtyTasks)
              : `${completedTasks} de ${qtyTasks}`
          }
        >
          Concluídas
        </DisplayHeading>
      </header>
      <section className={styles["c-tasks-display__content"]}>
        {children}
      </section>
    </>
  );
}

export { TasksDisplay };
