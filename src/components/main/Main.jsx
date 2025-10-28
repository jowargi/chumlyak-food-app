import { Outlet } from "react-router-dom";
import styles from "./Main.module.css";

export default function Main() {
  return (
    <main className={styles.main}>
      <Outlet />
    </main>
  );
}
