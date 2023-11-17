import React, { useState } from "react";
import Header from "./components/header";
import Form from "./components/form";
import Cards from "./components/cards/Cards";
// import Offcanvas from "./components/offcanvas";

const App = () => {
  const [cards, setCards] = useState([
    {
      img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/cc72ff2193c0f7a85322aee988d6fe1ae2cd9f8800b6ff6e8462790fe2aacaf3._RI_TTW_.jpg",
      title: "Inception",
      imdb: "8.8",
    },
    {
      img: "https://static.toiimg.com/thumb//62648157.cms?width=400&height=300&resizemode=4&pl=76891",
      title: "Titanic",
      imdb: "5.6",
    },
    {
      img: "https://deadline.com/wp-content/uploads/2023/03/fyuoirKpkTIjKPf88C81FkGdAVo-1.jpg?w=200",
      title: "Fall",
      imdb: "7.9",
    },
  ]);
  const [filteredCards,setFilteredCards] = useState([...cards])
  const addMovie = (imdb, title, img) => {
    let newMovie = {
      id: new Date().getTime(),
      imdb,
      title,
      img,
    };
    setCards([...cards,newMovie])
  };
  const filterCards = (searchValue)=>{
    setFilteredCards([...cards.filter(card=>card.title.trim().toLowerCase().includes(searchValue.trim().toLowerCase()))])
  }
  return (
    <>
      <Header />
      <input type="text" placeholder="search" onChange={(e)=>{
        filterCards(e.target.value)
      }}/>
      <Form addMovie={addMovie}/>
      <Cards cards={filteredCards} />
    </>
  );
};

export default App;
