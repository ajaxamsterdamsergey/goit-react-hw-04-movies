import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fetchMoviesQuery } from "../Services/api";
import { moviesPageList } from "./Styles/Styles.module.css";

export default class MoviesPage extends Component {
  state = {
    query: "",
    movies: [],
  };

  componentDidMount() {
    const { location } = this.props;

    if (location.search) {
      const query = new URLSearchParams(this.props.location.search).get(
        "query"
      );
      fetchMoviesQuery(query).then((data) =>
        this.setState({ movies: data.results })
      );
      this.props.history.push({
        pathname: this.props.location.pathname,
        search: `query=${query}`,
      });
    }
  }

  handleChange = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { query } = this.state;

    fetchMoviesQuery(query).then((data) =>
      this.setState({ movies: data.results })
    );

    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${query}`,
    });
  };

  render() {
    const { query, movies } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={query}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
          />

          <button type="submit">Search</button>
        </form>

        {movies && (
          <ul className={moviesPageList}>
            {movies.map((movie) => (
              <li key={movie.id}>
                {/* <Link to={`/movies/${movie.id}`}>{movie.title}</Link> */}
                <Link
                  to={{
                    pathname: `/movies/${movie.id}`,
                    state: { from: this.props.location },
                  }}
                >
                  {movie.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
