import React, { Component } from "react";

export default class GenreFilter extends Component {

  render() {
    return (
      <div>
        <ul className="list-group">
          <li onClick={() => this.props.onGenreChange("All Genres")} className={(this.props.activeFilter === "All Genres") ? "list-group-item active" : "list-group-item"}>All Genres</li>
          {this.props.genres.map((genre) => (
            <li onClick={() => this.props.onGenreChange(genre.name)} key={genre._id} className={this.props.activeFilter === genre.name ? "list-group-item active" : "list-group-item"}>{genre.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
