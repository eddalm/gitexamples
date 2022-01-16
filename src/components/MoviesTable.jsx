import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import GenreFilter from "./GenreFilter";
import { MovieItemsTable } from "./MovieItemsTable";
import Pagination from "./Pagination";

export class MoviesTable extends Component {
  state = {
    activePage: 1,
    movies: [],
    genres: getGenres(),
    activeFilter: "All Genres"
  };

  filteredMovies = [];

  componentDidMount() {
    this.allMovies = getMovies();
    this.setState((state) => ({ movies: this.allMovies }));
  }

  onDeleteMovie = (id) => {
    this.setState((prevState) => {
      return {
        movies: prevState.movies.filter((m) => m._id !== id),
      };
    });
  };

  handleLike = (movie) => {
    this.setState((state) => {
      const movies = [...state.movies];
      const index = movies.indexOf(movie);
      movies[index] = { ...movies[index] };
      movies[index].isLiked = !movies[index].isLiked;
      return { movies };
    });
  };

  handlePageChange = (e, pageNumber) => {
    console.log(e);
    console.log("pageNumber", pageNumber);
    e.preventDefault();
    this.setState(() => ({ activePage: pageNumber }));
  };

  handleGenreFilterChange = (genre) => {
    this.setState(() => ({ activePage: 1, activeFilter: genre}))
  }

  render() {
    let movies = this.state.movies;

    if (this.state.activeFilter !== "All Genres") {
      movies = movies.filter((movie) => movie.genre.name === this.state.activeFilter);
    }

    const moviesOnPage = movies.slice(
      (this.state.activePage - 1) * 5,
      (this.state.activePage - 1) * 5 + 5
    );

    return (
      <div className="row">
        {moviesOnPage.length > 0 ? (
          <>
            <div className="col-sm-3">
              <p>List group here</p>
              <GenreFilter
                genres={this.state.genres}
                activeFilter={this.state.activeFilter}
                onGenreChange={this.handleGenreFilterChange}
              ></GenreFilter>
            </div>
            <div className="col-md">
              <p>Showing {this.state.movies.length} movies in the database</p>
              <MovieItemsTable
                onDeleteMovie={this.onDeleteMovie}
                movies={moviesOnPage}
                handleLike={this.handleLike}
              ></MovieItemsTable>
              <Pagination
                totalPages={Math.ceil(movies.length / 5)}
                activePage={this.state.activePage}
                onPageChange={this.handlePageChange}
              ></Pagination>
            </div>
          </>
        ) : (
          <p>There are no movies in the database</p>
        )}
      </div>
    );
  }
}

export default MoviesTable;
