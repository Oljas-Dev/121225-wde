import { useParams, useNavigate } from "react-router-dom";
import { posts } from "../data/posts";
import styles from "./styles.module.css";

function Post() {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find((post) => post.id === Number(id));

  if (!post) {
    return <h2>Статья не найдена</h2>;
  }

  return (
    <div className={styles.post}>
      <h1>{post.title}</h1>

      <p>{post.content}</p>

      <button onClick={() => navigate("/posts")}>Назад к статьям</button>
    </div>
  );
}

export default Post;
