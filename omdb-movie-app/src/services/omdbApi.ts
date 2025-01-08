import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL; 

export const searchMovies = async (query: string) => {
  const response = await axios.get(`${API_URL}/omdb/search`, { params: { query } });
  return response.data;
};
