import React, { useState } from "react";
import styles from "./ReviewDropdown.module.css";
import ReviewStars from "../shared/reviewStars";

type ReviewList = [
  {
    id: string,
    username: string,
    rating: 1 | 2 | 3 | 4 | 5,
    description: string,
  }
]

function ReviewDropdown({reviewList}: {reviewList: ReviewList}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return(
    <div className={styles.reviewsSectionContainer}>
      <div className={styles.reviewToggle} onClick={() => {setIsOpen(!isOpen)}}>
        <p className={styles.reviewText}>Reviews</p>
        <button className={styles.reviewToggleIcon}></button>
      </div>
      <div className={isOpen ? styles.reviewListOpen : styles.reviewListClosed}>
        {reviewList.map((review) => {
          return(
            <div key={review.id} className={styles.reviewContainer}>
              <ReviewStars stars={review.rating}/>
              <p className={styles.reviewName}>{review.username}</p>
              <p className={styles.reviewComment}>{review.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ReviewDropdown;