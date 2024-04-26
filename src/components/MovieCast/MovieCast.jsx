import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetailsById } from "../../services/api";

import css from "./MovieCast.module.css";

const defaultImg =
  "<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>";

const MovieCast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      const data = await fetchMovieDetailsById(movieId, "credits");

      setCast(data.cast);
    })();
  }, [movieId]);

  const imageUrl = (profile_path) => {
    if (profile_path) {
      return `https://image.tmdb.org/t/p/w500${profile_path}`;
    } else {
      return defaultImg;
    }
  };

  return (
    <ul className={css.cast_list}>
      {cast &&
        cast.map((item) => (
          <li key={item.id} className={css.cast_item}>
            <img src={imageUrl(item.profile_path)} alt={item.name} />

            <h3 className={css.cast_title}>{item.name}</h3>
            <p>{item.character}</p>
          </li>
        ))}
    </ul>
  );
};

export default MovieCast;
