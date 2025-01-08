import React from 'react';

type MovieCardProps = {
  title: string;
  poster: string;
  year: string;
  onFavorite: () => void;
};

const MovieCard: React.FC<MovieCardProps> = ({ title, poster, year, onFavorite }) => (
  <div className="movie-card">
    <img src={poster} alt={title} />
    <h3>{title}</h3>
    <p>{year}</p>
    <button onClick={onFavorite}>Add to Favorites</button>
  </div>
);

export default MovieCard;
