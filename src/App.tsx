import { Post } from "./components/Post";
import { Header } from "./components/Header";
import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";
import { Paragraph } from "@phosphor-icons/react";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Izaelgomes.png",
      name: "izael Gomes",
      role: "desenvolvedor fullstack",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "Paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "jane.design/doctor",
      },
    ],
    publishedAt: new Date("2002-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Izaelgomes.png",
      name: "izael Gomes",
      role: "desenvolvedor fullstack",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "Paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "jane.design/doctor",
      },
    ],
    publishedAt: new Date("2002-05-03 20:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
