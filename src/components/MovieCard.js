import React, { useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { AiFillStar } from "react-icons/ai";

const MovieCard = ({ posterPath, voteAvg, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const showMovieDetails = () => {
    // When a card is clicked I need to navigate to another component where It will show all the movie details
    // Similar to what happens when we hover->click on the netflix app

    console.log("Card clicked");
  };

  if (!posterPath) return null;
  return (
    <div
      className="w-36 md:w-48 cursor-pointer text-white relative "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={showMovieDetails}
    >
      <img
        alt="Movie card"
        src={IMG_CDN_URL + posterPath}
        className="relative rounded-md"
      />
      {isHovered && (
        <div className="w-full flex flex-col gap-2 p-4 absolute bottom-0 left-0 scale-90 transition-all duration-300 bg-black">
          <p className="text-xl font-semibold text-cyan-100">{title}</p>
          <div className="border-t-2 border-dotted"></div>
          <p className="flex justify-start items-center gap-1 text-sm font-medium tracking-wider">
            IMDB: {(Math.round(voteAvg * 10) / 10).toFixed(1)}
            {"/10 "}
            <span className=" text-green-800">
              <AiFillStar />
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
