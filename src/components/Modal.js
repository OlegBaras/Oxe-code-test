import { useState } from "react";
import "../css/Modal.css";

//Modal Component
export default function Modal({ setShowModal }) {
  //input state
  const [inputValue, setInputValue] = useState("");

  //on modal background click
  const exitModal = () => {
    setShowModal(false);
  };

  // on modal card click
  const selectModalContent = (e) => {
    e.stopPropagation();
  };

  //cancel button handler
  const handleCancelClick = () => {
    setShowModal(false);
  };

  //POST Method
  const handleLaunchClick = () => {
    const options = {
      method: "POST",
    };
    fetch(`http://localhost:4444/add-rover/${inputValue}`, options).catch(
      (error) => {
        console.log("Error");
      }
    );
    setShowModal(false);
  };

  //on "Enter" key down handler
  function handleKeyDown(e) {
    if (e.key === "Enter" && e.target.value.length > 1) {
      e.preventDefault();
      handleLaunchClick();
    }
  }

  return (
    <div className="modal" onClick={exitModal}>
      <div className="modal-content" onClick={selectModalContent}>
        <div className="modal-title">
          <h2>New Rover</h2>
        </div>
        <div className="modal-body">
          <form>
            <label>Launch new rover to mars</label>
            <input
              type="text"
              placeholder="Rover Name"
              onKeyDown={handleKeyDown}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            ></input>
          </form>
        </div>
        <div className="control-buttons">
          <button className="modal-button" onClick={handleCancelClick}>
            Cancel
          </button>
          <button
            className="modal-button"
            disabled={inputValue < 1}
            onClick={handleLaunchClick}
          >
            Launch
          </button>
        </div>
      </div>
    </div>
  );
}
