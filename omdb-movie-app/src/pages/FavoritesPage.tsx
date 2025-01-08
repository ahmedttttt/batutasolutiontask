import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

interface Movie {
  id: number;
  title: string;
  poster: string;
  year: string;
}

const FavoritesPage: React.FC = () => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const response = await axios.get('/api/favorites');
      setFavorites(response.data);
    };

    fetchFavorites();
  }, []);

  const handleDelete = async (id: number) => {
    await axios.delete(`/api/favorites/${id}`);
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };

  return (
    <div>
      <h2>Favorites</h2>
      <div className="movies-grid">
        {favorites.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            poster={movie.poster}
            year={movie.year}
            onFavorite={() => handleDelete(movie.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
