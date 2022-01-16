import React, { Component } from "react";
import { MovieItemsRow } from "./MovieItemsRow";

export class MovieItemsTable extends Component {
  onDeleteMovieClick = (id) => {
    this.props.onDeleteMovie(id);
  };

  render() {
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.movies.map((movie) => {
              return (
                <MovieItemsRow
                  key={movie._id}
                  movie={movie}
                  onDeleteMovieClick={this.onDeleteMovieClick}
                  handleLike={this.props.handleLike}
                ></MovieItemsRow>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}
