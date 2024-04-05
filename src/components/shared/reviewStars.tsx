import React, { useEffect, useState } from "react";
import "./reviewStars.css";

type ReviewType = {
  id: number,
  isFilled: string,
}

const ReviewStars = ({ stars }: { stars: number }) => {

  const [starList, setStarList] = useState<Array<ReviewType>>([]);

  useEffect(() => {
    const newArray= [];

    for(let i = 0; i < 5; i++) {
      if(i < Math.floor(stars)) {
        newArray.push({id: i, isFilled: "filled_star"});
      } else {
        newArray.push({id: i, isFilled: "empty_star"});
      }
    }
    setStarList(newArray);
  }, [stars])

  return (
    <div className="stars_container">
      {starList.map((star) => {
        return (
          <div key={star.id} className={star.isFilled}></div>
        )
      })}
    </div>
  );
};

export default ReviewStars;
