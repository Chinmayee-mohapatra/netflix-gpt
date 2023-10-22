import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);

  return (
    <div className="px-6">
      <h1 className="text-lg md:text-2xl py-6 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar ">
        <div className="flex gap-4 ">
          {movies &&
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                posterPath={movie.poster_path}
                voteAvg={movie.vote_average}
                title={movie.title}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
