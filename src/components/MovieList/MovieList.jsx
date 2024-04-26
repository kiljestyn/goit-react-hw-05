import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const defaultImg =
  "<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>";

const MovieList = ({ movies }) => {
  const location = useLocation();
  const imageUrl = (poster_path) => {
    if (poster_path) {
      return `https://image.tmdb.org/t/p/w500${poster_path}`;
    } else {
      return defaultImg;
    }
  };

  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={css.item}>
          <Link
            to={`/movies/${movie.id}`}
            state={location}
            className={css.link}
          >
            <img
              src={imageUrl(movie.poster_path)}
              alt={movie.title}
              width={250}
            />
            {/* <h3 className={css.title}>{movie.title}</h3> */}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
