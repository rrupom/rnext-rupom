import { useState } from "react";
import { sculptureList } from "../data";

const Chanllenge1 = () => {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  console.log(sculptureList.length);

  function handleNextClick() {
    setIndex((index + 1) % sculptureList.length);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
};

export default Chanllenge1;
