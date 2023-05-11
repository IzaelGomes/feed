import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

interface Content {
  content: string;
  onDeleteComment(comment: string): void;
}

const Comment = ({ content, onDeleteComment }: Content) => {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

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

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplauding <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export { Comment };
