import "./reviewStars.css";

function ReviewStars({stars}) {

  function ReviewRender({starCount}) {
    switch(starCount) {
      case 1:
        return (
          <div className="stars_container">
            <div className="filled_star"></div>
            <div className="empty_star"></div>
            <div className="empty_star"></div>
            <div className="empty_star"></div>
            <div className="empty_star"></div>
          </div>
        )
      case 2:
        return (
          <div className="stars_container">
            <div className="filled_star"></div>
            <div className="filled_star"></div>
            <div className="empty_star"></div>
            <div className="empty_star"></div>
            <div className="empty_star"></div>
          </div>
        )
      case 3:
        return (
          <div className="stars_container">
            <div className="filled_star"></div>
            <div className="filled_star"></div>
            <div className="filled_star"></div>
            <div className="empty_star"></div>
            <div className="empty_star"></div>
          </div>
        )
      case 4:
        return (
          <div className="stars_container">
            <div className="filled_star"></div>
            <div className="filled_star"></div>
            <div className="filled_star"></div>
            <div className="filled_star"></div>
            <div className="empty_star"></div>
          </div>
        )
      case 5:
        return (
          <div className="stars_container">
            <div className="filled_star"></div>
            <div className="filled_star"></div>
            <div className="filled_star"></div>
            <div className="filled_star"></div>
            <div className="filled_star"></div>
          </div>
        )
      default:
        return (
          <div className="stars_container">
            <div className="empty_star"></div>
            <div className="empty_star"></div>
            <div className="empty_star"></div>
            <div className="empty_star"></div>
            <div className="empty_star"></div>
          </div>
        )
    }
  }

  return (
    <ReviewRender starCount={stars} />
  )
}

export default ReviewStars;