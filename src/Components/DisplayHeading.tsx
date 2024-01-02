import { ReactNode } from "react";
import styles from "./DisplayHeading.module.css";

interface DisplayHeading {
  value: string;
  children: ReactNode;
}
function DisplayHeading({ value, children }: DisplayHeading) {
  return (
    <h2 className={styles["c-display-heading"]}>
      {children}
      <span className={styles["c-display-heading__counter"]}>{value}</span>
    </h2>
  );
}

export { DisplayHeading };
