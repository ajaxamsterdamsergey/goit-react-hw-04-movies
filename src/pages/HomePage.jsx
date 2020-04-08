import React, { Component } from "react";
import { fetchMovies } from "../Services/api";
import { Link } from "react-router-dom";
import { homePageList, itemHomePage } from "./Styles/Styles.module.css";

export default class HomePage extends Component {
  state = { movies: [] };

  componentDidMount() {
    fetchMovies().then((data) => this.setState({ movies: data.results }));
  }
  render() {
    const { movies } = this.state;

    return (
      <div>
        {movies.length > 0 && (
          <ul className={homePageList}>
            {movies.map((movie) => (
              <li className={itemHomePage} key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
