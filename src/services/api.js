import axios from "axios";

export const fetchTrendingMovies = async () => {
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  const options = {
    headers: {
      // Замість api_read_access_token вставте свій токен
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzBmNzEwNGQ0MGI5YTY0MGVjYmZjMjRjMzViZmZmYyIsInN1YiI6IjY2Mjc4OTEzMjIxYmE2MDE2MzE0YThlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Mv59iOTxq69w7X6T6e_83FM4axZfZHgdVr8Ir6xdqng",
    },
  };

  const response = await axios
    .get(url, options)
    .then((response) => {
      return response.data;
    })
    .catch((err) => console.error(err));
  return response;
};

export const fetchMovieById = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const options = {
    headers: {
      // Замість api_read_access_token вставте свій токен
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzBmNzEwNGQ0MGI5YTY0MGVjYmZjMjRjMzViZmZmYyIsInN1YiI6IjY2Mjc4OTEzMjIxYmE2MDE2MzE0YThlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Mv59iOTxq69w7X6T6e_83FM4axZfZHgdVr8Ir6xdqng",
    },
  };

  const response = await axios
    .get(url, options)
    .then((response) => {
      return response.data;
    })
    .catch((err) => console.error(err));
  return response;
};
export const fetchMovieDetailsById = async (id, param) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/${param}`;
  const options = {
    headers: {
      // Замість api_read_access_token вставте свій токен
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzBmNzEwNGQ0MGI5YTY0MGVjYmZjMjRjMzViZmZmYyIsInN1YiI6IjY2Mjc4OTEzMjIxYmE2MDE2MzE0YThlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Mv59iOTxq69w7X6T6e_83FM4axZfZHgdVr8Ir6xdqng",
    },
  };

  const response = await axios
    .get(url, options)
    .then((response) => {
      return response.data;
    })
    .catch((err) => console.error(err));
  return response;
};

export const fetchMovieBySearch = async (query) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
  const options = {
    headers: {
      // Замість api_read_access_token вставте свій токен
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzBmNzEwNGQ0MGI5YTY0MGVjYmZjMjRjMzViZmZmYyIsInN1YiI6IjY2Mjc4OTEzMjIxYmE2MDE2MzE0YThlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Mv59iOTxq69w7X6T6e_83FM4axZfZHgdVr8Ir6xdqng",
    },
  };

  const response = await axios
    .get(url, options)
    .then((response) => {
      return response.data;
    })
    .catch((err) => console.error(err));
  return response;
};
