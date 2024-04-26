import { lazy, useEffect, useState } from "react";
import { fetchMovieBySearch } from "../../services/api";
import { useSearchParams } from "react-router-dom";

import css from "./MoviesPage.module.css";

const MovieList = lazy(() => import("../../components/MovieList/MovieList"));

import SearchForm from "../../components/SearchForm/SearchForm";
import Navigation from "../../components/Navigation/Navigation";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  const [movies, setMovies] = useState(null);
  useEffect(() => {
    if (!query) return;
    (async () => {
      const data = await fetchMovieBySearch(query);

      setMovies(data);
    })();
  }, [query]);

  const onSubmit = (value) => {
    setSearchParams({
      query: value.searchValue.toLowerCase().trim(),
    });
  };

  return (
    <>
      <header>
        <Navigation />
        <SearchForm onSubmit={onSubmit} />
      </header>

      <div>{movies && <MovieList movies={movies.results} />}</div>
      <div>
        {movies && movies.results.length === 0 && (
          <p className={css.search_error}>No matches found</p>
        )}
      </div>
    </>
  );
};

export default MoviesPage;
