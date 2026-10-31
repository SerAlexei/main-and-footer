import { Component } from "react";
import "./Header.css";

export class Header extends Component {
  state = {
    selectedMovie: "",
  };

  render() {
    const count = this.props.count;
    const movies = this.props.movies;

    return (
      <>
        <header>
          <ul className="movies-list">
            {movies.map((movie) => {
              return (
                <li
                  onClick={() => {
                    this.setState({ selectedMovie: movie });
                    this.props.onMovieSelect(movie);
                  }}
                  key={movie}
                >
                  {movie}
                </li>
              );
            })}
          </ul>
        </header>
      </>
    );
  }
}

export default Header;
