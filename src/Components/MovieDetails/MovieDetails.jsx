import React from "react";
import styles from "./MovieDetails.module.css";

const MovieDetails = ({
  title,
  overview,
  genres,
  vote_average,
  poster_path,
  original_title
}) => (
  <div className={styles.wrapper}>
    <img
      className={styles.image}
      src={`https://image.tmdb.org/t/p/w500${poster_path}`}
      alt={original_title}
    />
    <div className={styles.details}>
      <h2>{title}</h2>
      <p className={styles.text}>User Score: {vote_average * 10}%</p>
      <h4>Overview</h4>
      <p className={styles.text}>{overview}</p>
      <h4>Genres</h4>
      <ul className={styles.genreItem}>
        {genres &&
          genres.map(item => (
            <li className={styles.genre} key={item.id}>
              {item.name}
            </li>
          ))}
      </ul>
    </div>
  </div>
);
export default MovieDetails;
