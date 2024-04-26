import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from "./MovieReviews.module.css";
import { fetchMovieDetailsById } from "../../services/api";
import Reviews from "../Reviews/Reviews";

const MovieReviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      const data = await fetchMovieDetailsById(movieId, "reviews");

      setReviews(data);
    })();
  }, [movieId]);

  return (
    <div className={css.reviews_container}>
      {reviews && (
        <h3 className={css.reviews_title}>
          Number of reviews about the film: {reviews.total_results}
        </h3>
      )}
      {reviews && <Reviews reviews={reviews.results} />}
    </div>
  );
};

export default MovieReviews;
