import MovieCard from "../card/index";
import React from "react";

export const Cards = ({ cards, inputValue }) => {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      {cards
        .filter((item) =>
          inputValue.trim()
            ? item.title.toLowerCase().includes(inputValue.toLowerCase()) ||
              item.imdb.includes(inputValue)
            : item
        )
        .sort((a, b) => a.title.localeCompare(b.title))
        .map((card, index) => {
          return <MovieCard key={index} item={card} />;
        })}
    </div>
  );
};

export default Cards;
