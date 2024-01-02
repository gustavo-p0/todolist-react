import styles from "./Wrapper.module.css";
import { ReactNode } from "react";

function Wrapper({ children }: { children: ReactNode }) {
  return <section className={styles["c-wrapper"]}>{children}</section>;
}

export { Wrapper };
