import { NavLink } from "react-router-dom";
import styles from "./RouterLink.module.css";
import classNames from "classnames";

export default function RouterLink({ children, to, style }) {
  return (
    <NavLink
      to={to}
      style={style}
      className={({ isActive }) =>
        classNames(styles.link, { [styles["link--active"]]: isActive })
      }
    >
      {children}
    </NavLink>
  );
}
