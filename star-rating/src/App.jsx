import { useState } from "react";

const STAR_COUNT = 5;
function App() {
  const [data, setData] = useState(() => {
    return "aniket";
  });
  const [stars, setStars] = useState([
    {
      star: 0,
      isRated: false,
    },
    {
      star: 1,
      isRated: false,
    },
    {
      star: 2,
      isRated: false,
    },
    {
      star: 3,
      isRated: false,
    },
    {
      star: 4,
      isRated: false,
    },
  ]);

  const [isRated, setIsRated] = useState(false);
  const [finalRating, setFinalRating] = useState(0);

  const setActiveStars = (e, i) => {
    e.stopPropagation();
    let newRating = stars.map((star) => {
      if (star.star <= i) {
        star.isRated = true;
      } else {
        star.isRated = false;
      }
      return star;
    });
    setStars([...newRating]);
  };

  const setAllInactive = () => {
    if (!isRated) {
      let newRating = stars.map((star) => {
        star.isRated = false;
        return star;
      });
      setStars([...newRating]);
    }
  };

  return (
    <div onMouseOut={setAllInactive} className="star-container">
      {stars.map((star, i) => {
        return (
          <span
            onMouseOver={(e) => {
              setActiveStars(e, i);
            }}
            onClick={() => {
              setIsRated(true);
              setFinalRating(i + 1);
              console.log(finalRating);
            }}
            className={star.isRated ? "star active" : "star"}
          ></span>
        );
      })}
    </div>
  );
}

export default App;
