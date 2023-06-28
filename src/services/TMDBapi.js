import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = 'ce40982cf9288342bd5c4fc77432b9de';
const API_KEY = `api_key=${KEY}&language=en-US`;

export const getTrendingMovies = async () => {
  const url = `trending/movie/day?api_key=${KEY}`;
  const response = await axios.get(url);
  return response.data.results;
};

export const getMoviesByQuery = async query => {
  const url = `search/movie?${API_KEY}&query=${query}&page=1&include_adult=false`;
  const response = await axios.get(url);
  return response.data;
};

export const getMovieDetailsByMovieId = async id => {
  const url = `movie/${id}?${API_KEY}`;
  const response = await axios.get(url);
  return response.data;
};

export const getMovieCastByMovieId = async id => {
  const url = `movie/${id}/credits?${API_KEY}`;
  const response = await axios.get(url);
  return response.data.cast;
};

export const getMovieReviewsByMovieId = async id => {
  const url = `movie/${id}/reviews?${API_KEY}&page=1`;
  const response = await axios.get(url);
  return response.data.results;
};

const TMDBapi = {
  getTrendingMovies,
  getMoviesByQuery,
  getMovieDetailsByMovieId,
  getMovieCastByMovieId,
  getMovieReviewsByMovieId,
};

export default TMDBapi;
