import styles from "./App.module.css";
import { Header } from "../Components/Header";
import { NewTaskBar } from "../Components/NewTaskBar";
import { Wrapper } from "../Components/Wrapper";
import { TasksDisplay } from "../Components/TasksDisplay";
import { useEffect, useState } from "react";
import { NoContent } from "../Components/NoContent";
import { Task } from "../Components/Task";
import { nanoid } from "nanoid";

export interface task {
  id: string;
  content: string;
  checked: boolean;
}

function App() {
  const [tasks, setTasks] = useState<task[]>([]);

  const qtyTasks = tasks.length;

  const completedTasks = tasks.reduce(
    (acc, task) => (task.checked ? ++acc : acc),
    0
  );

  const addTask = (content: string): void => {
    const newTask = {
      id: nanoid(),
      content,
      checked: false,
    };

    const newTasks = [...tasks, newTask];

    setTasks(newTasks);
  };

  const toggleTaskCheck = (id: string): void => {
    const newTasks = tasks.map((task) => {
      return {
        ...task,
        checked: task.id === id ? !task.checked : task.checked,
      };
    });

    setTasks(newTasks);
  };

  const deleteTask = (id: string): void => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  useEffect(() => {
    const localTasks = localStorage.getItem("tasks");

    if (typeof localTasks === "string") {
      setTasks(JSON.parse(localTasks));
    }
  }, []);

  useEffect(() => {
    if (tasks.length !== 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  return (
    <main className={styles["c-app"]}>
      <Header />
      <Wrapper>
        <NewTaskBar onAddNewTask={addTask} />
        <TasksDisplay qtyTasks={qtyTasks} completedTasks={completedTasks}>
          {qtyTasks === 0 && <NoContent />}
          {qtyTasks !== 0 &&
            tasks.map((task) => {
              const { id } = task;
              return (
                <Task
                  key={id}
                  task={task}
                  onToggleCheck={toggleTaskCheck}
                  onDeleteCheck={deleteTask}
                />
              );
            })}
        </TasksDisplay>
      </Wrapper>
    </main>
  );
}

export { App };
