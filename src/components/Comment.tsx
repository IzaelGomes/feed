import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";
import { Avatar } from "./avatar";

const Comment = () => {
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/Izaelgomes.png" hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Izael Gomes</strong>
              <time title="11 de maio às 08:13h" dateTime="2022-05-11 08:13:30">
                Publicado a 1h
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplauding <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export { Comment };
