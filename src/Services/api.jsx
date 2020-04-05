import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3/";
const key = "34fc95322fa082bd00768bf11ed9b6d7";

export const fetchMovies = () => {
  return axios
    .get(`${BASE_URL}trending/all/day?api_key=${key}`)
    .then(data => data.data);
};
export const fetchMoviesId = id => {
  return axios
    .get(`${BASE_URL}movie/${id}?api_key=${key}`)
    .then(data => data.data);
};
export const fetchCastId = id => {
  return axios
    .get(`${BASE_URL}movie/${id}/credits?api_key=${key}`)
    .then(data => data.data);
};
export const fetchReviewsId = id => {
  return axios
    .get(`${BASE_URL}movie/${id}/reviews?api_key=${key}&language=en-US&page=1`)
    .then(data => data.data);
};
export const fetchMoviesQuery = query => {
  return axios
    .get(
      `${BASE_URL}search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`
    )
    .then(data => data.data);
};
