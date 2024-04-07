import React from "react";
import "./reviewStars.css";

const ReviewStars = ({ stars }: { stars: number }) => {


  const starList= [];

  for(let i = 0; i < 5; i++) {
    if(i < Math.floor(stars)) {
      starList.push({id: i, isFilled: "filled_star"});
    } else {
      starList.push({id: i, isFilled: "empty_star"});
    }
  }

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
