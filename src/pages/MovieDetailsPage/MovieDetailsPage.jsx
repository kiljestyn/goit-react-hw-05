import { lazy, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieById } from "../../services/api";
import { FaArrowLeft } from "react-icons/fa";

const MovieCard = lazy(() => import("../../components/MovieCard/MovieCard"));

import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    (async () => {
      const data = await fetchMovieById(movieId);

      setMovie(data);
    })();
  }, [movieId]);

  // GoBack
  const location = useLocation();
  const backRef = useRef(location.state);

  return (
    <div>
      <Link className={css.button} to={backRef.current}>
        <FaArrowLeft />
      </Link>
      {movie && <MovieCard movie={movie} />}
      <ul className={css.addInfo}>
        <h4>Additional information</h4>
        <li>
          <Link className={css.additional_info_link} to="cast">
            Cast
          </Link>
        </li>
        <li>
          <Link className={css.additional_info_link} to="reviews">
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
