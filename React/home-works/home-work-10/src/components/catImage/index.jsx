import axios from "axios";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import IsLoading from "../isLoading";

function CatImage() {
  const [catImage, setCatImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const catImageLink = "https://api.thecatapi.com/v1/images/search";

  const getCatImage = () => {
    setIsLoading(true);
    axios
      .get(catImageLink)
      .then((value) => {
        setCatImage(value.data[0].url);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getCatImage();
  }, []);

  if (isLoading) return <IsLoading />;

  return (
    <div className={styles.container}>
      <img src={catImage || null} alt="Image of a random cat" />
      <button onClick={getCatImage}>next cat</button>
    </div>
  );
}

export default CatImage;
