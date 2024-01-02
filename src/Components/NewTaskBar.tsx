import { PlusCircle } from "@phosphor-icons/react";
import styles from "./NewTaskBar.module.css";
import { Input } from "./Input";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface INewTaskBar {
  onAddNewTask: (content: string) => void;
}

function NewTaskBar({ onAddNewTask }: INewTaskBar) {
  const [newTask, setNewTask] = useState("");

  const handleChangeNewTask = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.currentTarget.value);
  };

  const handleInvalidNewTask = (event: InvalidEvent<HTMLInputElement>) => {
    event.currentTarget.setCustomValidity("Esse campo é obrigatório");
  };

  const handleAddNewTask = (event: FormEvent) => {
    event.preventDefault();
    onAddNewTask(newTask);
    setNewTask("");
  };

  const isNewTaskEmpty = newTask.trim().length === 0;

  return (
    <form className={styles["c-new-task-bar"]} onSubmit={handleAddNewTask}>
      <Input
        value={newTask}
        onChange={handleChangeNewTask}
        onInvalid={handleInvalidNewTask}
        type="text"
        placeholder="Descrição da tarefa"
        required
      />
      <button
        type="submit"
        disabled={isNewTaskEmpty}
        className={
          styles["c-new-task-bar__button"] +
          " " +
          styles["c-new-task-bar__submit"]
        }
      >
        Criar <PlusCircle />
      </button>
    </form>
  );
}

export { NewTaskBar };
