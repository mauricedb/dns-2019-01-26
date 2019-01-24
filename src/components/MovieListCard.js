import React from 'react';

const MovieListCard = ({ movie, onMovieClicked }) => {
  return (
    <div className="movie" onClick={() => onMovieClicked(movie)}>
      <h4>{movie.title}</h4>
      <img src={movie.image} alt={movie.title} />
      <div>{movie.overview}</div>
    </div>
  );
};

export default MovieListCard;
