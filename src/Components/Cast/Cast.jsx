import React, { Component } from "react";
import { fetchCastId } from "../../Services/api";
import styles from "./Cast.module.css";

const getIdFromProps = props => props.match.params.movieId;

export default class Cast extends Component {
  state = { cast: [] };
  componentDidMount() {
    const id = getIdFromProps(this.props);

    fetchCastId(id).then(
      /* console.log */ data => this.setState({ cast: data.cast })
    );
  }
  render() {
    const { cast } = this.state;
    return (
      <div>
        <ul className={styles.list}>
          {cast.map(item => (
            <li key={item.id}>
              <img
                className={styles.image}
                src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                alt={item.name}
              />
              <p className={styles.name}>{item.name}</p>
              <p className={styles.character}>Character: {item.character}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
