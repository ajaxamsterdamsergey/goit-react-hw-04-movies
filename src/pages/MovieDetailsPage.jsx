import React, { Component } from "react";
import { Switch, Route, BrowserRouter, NavLink } from "react-router-dom";
import { fetchMoviesId } from "../Services/api";
import Cast from "../Components/Cast/Cast";
import Reviews from "../Components/Reviews/Reviews";
import MovieDetails from "../Components/MovieDetails/MovieDetails";
import { active, navLink, button } from "./Styles/Styles.module.css";

const getIdFromProps = props => props.match.params.movieId;

export default class MovieDetailsPage extends Component {
  state = { movie: null };
  componentDidMount() {
    const id = getIdFromProps(this.props);

    fetchMoviesId(id).then(
      /* console.log */ data => this.setState({ movie: data })
    );
  }
  handleOnGoBack = () => {
    const { history, location } = this.props;
    if (location.state) {
      return history.push(location.state.from);
    }
    history.push("/");
  };
  render() {
    const { movie } = this.state;
    const { match } = this.props;

    return (
      <div>
        <BrowserRouter>
          <button
            type="button"
            className={button}
            onClick={this.handleOnGoBack}
          >
            Go back
          </button>
          {<MovieDetails {...movie} />}
          <h4>Additional information</h4>
          <ul>
            <li>
              <NavLink
                to={`${match.url}/cast`}
                className={navLink}
                activeClassName={active}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${match.url}/reviews`}
                className={navLink}
                activeClassName={active}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
          <Switch>
            <Route path={`${match.path}/cast`} component={Cast} />
            <Route path={`${match.path}/reviews`} component={Reviews} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
