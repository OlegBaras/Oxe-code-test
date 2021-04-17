import React, { useState, useEffect } from "react";
import "./App.css";
import CardsList from "./components/CardsList";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [cards, setCards] = useState([]);

  //GET Method
  useEffect(() => {
    fetch("http://localhost:4444/rovers")
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
      });
  }, [showModal]);

  //Trigger Modal
  const addPost = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="App">
      <header>
        <h1>Mars Rovers</h1>
      </header>
      <main>
        <CardsList cards={cards} />
      </main>
      <footer>
        <button className="add-post-button" onClick={addPost}>
          New Rover
        </button>
      </footer>
      {showModal ? <Modal setShowModal={setShowModal} /> : null}
    </div>
  );
}

export default App;
