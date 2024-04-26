import { useEffect, useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import MovieList from "../../components/MovieList/MovieList";
import { fetchTrendingMovies } from "../../services/api";

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await fetchTrendingMovies();

      setMovies(data);
    })();
  }, []);
  return (
    <>
      <header>
        <Navigation />
      </header>

      <div>{movies && <MovieList movies={movies.results} />}</div>
    </>
  );
};

export default HomePage;
