import styles from "./Post.module.css";

const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/IzaelGomes.png"
          />
          <div className={styles.authorInfor}>
            <strong>Izael Gomes</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="11 de maio às 08:13h" dateTime="2022-05-11 08:13:30">
          Publicado a 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="#">jane.design/doctorcare</a>{" "}
        </p>

        <a href="#">#novoprojeto </a>
        <a href="#"> #nlw </a>
        <a href="#"> #rocketseat</a>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
      </form>
    </article>
  );
};

export { Post };
