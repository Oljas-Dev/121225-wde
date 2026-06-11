import { useState } from "react";

import style from "./index.module.css";

export default function Ratings() {
  const [ratingValue, setRatingValue] = useState(0);

  const ratingList = [
    "https://www.clipartmax.com/png/small/67-676956_out-of-3-out-of-5-star-rating.png",

    "https://www.clipartmax.com/png/small/73-731815_stars-clipart-2-5-star-rating.png",

    "https://www.clipartmax.com/png/small/297-2970338_rating-2-out-of-5-gold-stars.png",
  ];

  const btnTitles = ["Хорошо", "Приемлемо", "Плохо"];

  return (
    <div className={style.position}>
      <div className={style.flexCol}>
        <img src={ratingList[ratingValue]} alt="Current rating" />
        <div className={style.flex}>
          {btnTitles.map((title, index) => {
            return (
              <button
                onClick={() => setRatingValue(index)}
                key={`button-${index}`}
              >
                {title}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
