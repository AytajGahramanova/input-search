import React, { useState } from "react";
import Header from "./components/header";
import Form from "./components/form";
import { Cards } from "./components/cards/Cards";
import { movieData } from "./data";
// import Offcanvas from "./components/offcanvas";

const App = () => {
  const [cards, setCards] = useState(movieData);
  const [filterValue, setFilterValue] = useState("");

  const addMovie = (imdb, title, img) => {
    let newMovie = {
      id: new Date().getTime(),
      imdb,
      title,
      img,
    };
    setCards([...cards, newMovie]);
  };

  const handleChange = (e) => {
    setFilterValue(e.target.value);
  };

  return (
    <>
      <Header />
      <input
        type="text"
        placeholder="search"
        onChange={handleChange}
        value={filterValue}
      />
      <Form addMovie={addMovie} />
      <Cards cards={cards} inputValue={filterValue} />
    </>
  );
};

export default App;
