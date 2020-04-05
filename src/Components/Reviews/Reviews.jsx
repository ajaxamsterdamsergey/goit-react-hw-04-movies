import React, { Component } from "react";
import { fetchReviewsId } from "../../Services/api";

const getIdFromProps = props => props.match.params.movieId;

export default class Cast extends Component {
  state = { reviews: [] };
  componentDidMount() {
    const id = getIdFromProps(this.props);

    fetchReviewsId(id).then(
      /* console.log */ data => this.setState({ reviews: data.results })
    );
  }
  render() {
    const { reviews } = this.state;
    return (
      <div>
        <ul>
          {reviews.map(item => (
            <li key={item.id}>
              <p>{item.author}</p>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
