import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "e8b33828937ed5e52bb70b18de84e2bf";

const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MovieService {
  static getMovies() {
    return axios(withBaseUrl("movie/popular"));
  }

  static getMovieDetails(id) {
    return axios(withBaseUrl(`movie/${id}`));
  }

  static searchMovies(movie) {
    return axios(withBaseUrl("search/movie") + `&query=${movie}`);
  }
}
