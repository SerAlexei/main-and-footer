import { Component } from "react";
import './Main.css'

export class Main extends Component {
  render() {
    const currentMovie = this.props.currentMovie;
    const selectedMovieObj = this.props.selectedMovieObj;

    if (!selectedMovieObj) {
      return <main>
        <h2 className="movie-title">Please select a film</h2>
      </main>;
    }
    return (
      <>
      <main>
        <article className="movie-article">
          <h2 className="movie-title">{selectedMovieObj.title}</h2>
          <p className="movie-plot">{selectedMovieObj.plot}</p>
          <div className="movie-info">
            <span>Страна: {selectedMovieObj.country}</span>
            <span>Студия: {selectedMovieObj.studio}</span>
            <span>Жанр: {selectedMovieObj.genre}</span>
            <span>Год: {selectedMovieObj.year}</span>
          </div>
          <div className="movie-actors">
            В ролях: 
            {selectedMovieObj.actors.map((actor) => {
              return <span key={actor}> {actor},</span>;
            })}
          </div>
        </article>
      </main>
      </>
    );
  }
}

export default Main;
