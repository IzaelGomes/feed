import styles from "./Sidebar.module.css";
import { PencilLine } from "@phosphor-icons/react";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=20"
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/IzaelGomes.png"
        />

        <strong>Izael Gomes</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          {" "}
          <PencilLine size={20} /> Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};

export { Sidebar };
