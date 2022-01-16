import React, { Component } from "react";
import LikeComponent from "./LikeComponent";

export class MovieItemsRow extends Component {
  handleDeleteButtonClick = (movieId) => {
    this.props.onDeleteMovieClick(movieId);
  };

  render() {
    const movie = this.props.movie;
    return (
      <tr>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td><LikeComponent isLiked={movie.isLiked} movie={movie} onClick={this.props.handleLike}></LikeComponent></td>
        <td>
          <button
            onClick={() => this.handleDeleteButtonClick(movie._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
