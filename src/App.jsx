import { Component } from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";



const moviesData = [
  {
    title: "Gladiator",
    genre: "Исторический фильм, драма, боевик",
    country: "США, Великобритания",
    studio: "DreamWorks Pictures, Universal Pictures",
    year: 2000,
    plot: "Римский полководец Максимус предательски обманут завистливым сыном императора. Потеряв семью и статус, он попадает на арену гладиаторов, чтобы отомстить за смерть близких.",
    actors: ["Рассел Кроу", "Хоакин Феникс", "Конни Нильсен"]
  },
  {
    title: "Harry Potter",
    genre: "Фэнтези, приключения",
    country: "Великобритания, США",
    studio: "Heyday Films, Warner Bros.",
    year: 2001,
    plot: "Сирота Гарри Поттер узнает, что он — волшебник, и отправляется в Школу чародейства и волшебства Хогвартс.",
    actors: ["Дэниэл Редклифф", "Руперт Гринт", "Эмма Уотсон"]
  },
  {
    title: "Logan",
    genre: "Фантастический боевик, драма",
    country: "США",
    studio: "Marvel Entertainment, 20th Century Fox",
    year: 2017,
    plot: "В недалеком будущем уставший от жизни Логан защищает юную мутантку Лору от преследующих их темных сил.",
    actors: ["Хью Джекман", "Патрик Стюарт", "Дафни Кин"]
  }
];

class App extends Component {
  state = {
    count: 0,
    movies: moviesData.map((movie) => movie.title),
    currentMovie: ""
  };

  render() {

    const selectedMovieObj = moviesData.find(moveiTitle => moveiTitle.title === this.state.currentMovie);
    
    return (
      <>
        <Header 
        count={this.state.count} 
        movies={this.state.movies} 
        onMovieSelect={(movie) => this.setState({ currentMovie: movie })}
        />
        <Main 
        selectedMovieObj = {selectedMovieObj}
        />
        <Footer/>
      </>
    );
  }
}

export default App;
