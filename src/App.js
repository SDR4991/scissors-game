import { useState } from "react";
import scissors from "./img/scissors.png";
import stone from "./img/stone.png";

function App() {
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [formSubmit1, setFormSubmit1] = useState("");
  const [formSubmit2, setFormSubmit2] = useState("");
  const [start, setStart] = useState(false);

  function handlePlayer1() {
    setPlayer1(() => Math.random() >= 0.5);
  }
  function handlePlayer2() {
    setPlayer2(() => Math.random() >= 0.5);
  }

  function handleReset() {
    setPlayer1(null);
    setPlayer2(null);
  }

  function handleInput1(e) {
    setName1(e.target.value);
  }

  function handleInput2(e) {
    setName2(e.target.value);
  }

  function handleSubmitForm1(e) {
    e.preventDefault();
    setFormSubmit1(name1);
    setName1("");
  }

  function handleSubmitForm2(e) {
    e.preventDefault();
    setFormSubmit2(name2);
    setName2("");
  }

  function handleStart() {
    setStart(true);
  }

  return (
    <>
      {!start ? (
        <div className="app">
          <h1>SCISSOR GAME</h1>
          <button onClick={() => handleStart()}>START THE GAME</button>
        </div>
      ) : (
        <div className="app">
          <h2 className="title">Stone & Scissors Game</h2>
          <div className="fields">
            <div className="section">
              {!formSubmit1 ? (
                <form className="form">
                  <p className="subtitle">Player 1 enter your name</p>
                  <input
                    className="input"
                    type="text"
                    value={name1}
                    onChange={handleInput1}
                    placeholder="Enter your name here :)"
                  />
                  <button
                    className="btn-next"
                    type="submit"
                    onClick={handleSubmitForm1}
                  >
                    Save
                  </button>
                </form>
              ) : (
                "Ready to play!"
              )}

              <h3 className="name">
                {formSubmit1 ? `Player ${formSubmit1}` : "Player 1"}
              </h3>
              <img
                className="img"
                src={player1 ? scissors : stone}
                alt="element"
              />
              <button className="btn-play" onClick={handlePlayer1}>
                Play!
              </button>
            </div>
            <div className="section">
              {!formSubmit2 ? (
                <form className="form">
                  <p className="subtitle">Player 2 enter your name</p>
                  <input
                    className="input"
                    type="text"
                    value={name2}
                    onChange={handleInput2}
                    placeholder="Enter your name here :)"
                  />
                  <button
                    className="btn-next"
                    type="submit"
                    onClick={handleSubmitForm2}
                  >
                    Save
                  </button>
                </form>
              ) : (
                "Ready to play!"
              )}
              <h2 className="name">
                {formSubmit2 ? `Player ${formSubmit2}` : "Player 2"}
              </h2>
              <img
                className="img"
                src={player2 ? scissors : stone}
                alt="element"
              />
              <button className="btn-play" onClick={handlePlayer2}>
                Play!
              </button>
            </div>
          </div>
          <p className="annoucement">
            {(player1 === null) & (player2 === null) ? "Let`s play!" : ""}
            {(player1 === true || false) && (player2 === true || false)
              ? "It`s a draw, play again!"
              : ""}
            {player2 && player1 === false ? `${formSubmit1} is a Winner!` : ""}
            {player1 && player2 === false ? `${formSubmit2} is a Winner!` : ""}
          </p>
          <button className="btn-reset" onClick={handleReset}>
            Play Again
          </button>
        </div>
      )}
    </>
  );
}

export default App;
