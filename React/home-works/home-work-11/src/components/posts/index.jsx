import { Link } from "react-router-dom";
import { posts } from "./../data/posts";
import styles from "./styles.module.css";

function Posts() {
  return (
    <div className={styles.posts}>
      <h1>Все статьи</h1>

      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <h2>{post.title}</h2>

          <Link to={`/posts/${post.id}`}>Читать статью</Link>
        </div>
      ))}
    </div>
  );
}

export default Posts;
