const BASE_URL = 'https://api.themoviedb.org/3';
const KEY_API = 'e833adf501cf688f3d015142b79326d1';

function FetchApi() {
  return fetch(`${BASE_URL}/trending/movie/day?api_key=${KEY_API}`).then(
    response => response.json(),
  );
}

function FetchSearchMovies(query) {
  return fetch(
    `${BASE_URL}/search/movie?query=${query}&api_key=${KEY_API}`,
  ).then(response => response.json());
}

function FetchMoviesDetail(id) {
  return fetch(`${BASE_URL}/movie/${id}?api_key=${KEY_API}`).then(response =>
    response.json(),
  );
}

function FetchMoviesCast(id) {
  return fetch(`${BASE_URL}/movie/${id}/credits?api_key=${KEY_API}`).then(
    response => response.json(),
  );
}

function FetchMoviesReviews(id) {
  return fetch(`${BASE_URL}/movie/${id}/reviews?api_key=${KEY_API}`).then(
    response => response.json(),
  );
}

export {
  FetchApi,
  FetchMoviesDetail,
  FetchMoviesCast,
  FetchMoviesReviews,
  FetchSearchMovies,
};
