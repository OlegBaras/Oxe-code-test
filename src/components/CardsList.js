// import React from "react";
import Card from "./Card";
import "../css/CardsList.css";
import { v4 as uuidv4 } from "uuid";

//Card List Component
export default function CardsList({ cards }) {
  return (
    <>
      {cards.length ? (
        <div className="cards-container">
          {cards.map((card) => {
            return <Card key={uuidv4()} name={card.name} state={card.state} />;
          })}
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </>
  );
}
