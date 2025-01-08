import React, { useState } from 'react';
import { searchMovies } from '../services/omdbApi';
import MovieCard from '../components/MovieCard';

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    const data = await searchMovies(query);
    setMovies(data.Search);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies"
      />
      <button onClick={handleSearch}>Search</button>
      <div className="movies-grid">
        {movies.map((movie: any) => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            poster={movie.Poster}
            year={movie.Year}
            onFavorite={() => console.log('Added to Favorites')}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;