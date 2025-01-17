import { useState } from "react";
import { motion } from "motion/react";

function App() {
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [formSubmit1, setFormSubmit1] = useState("");
  const [formSubmit2, setFormSubmit2] = useState("");
  const [start, setStart] = useState(false);
  const [scorePlayer1, setScorePlayer1] = useState("");
  const [scorePlayer2, setScorePlayer2] = useState("");

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

  function handleScorePlayer1(state) {
    setScorePlayer1((state) => state++);
  }

  function handleScorePlayer2(state) {
    setScorePlayer2((state) => state++);
  }

  return (
    <>
      {!start ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 0.98 }}
          className="app-start "
        >
          <h1>SCISSOR GAME</h1>
          <button className="btn-start" onClick={() => handleStart()}>
            START THE GAME
          </button>
        </motion.div>
      ) : (
        <div className="app">
          <h2 className="title">Stone & Scissors Game</h2>
          <div className="fields">
            <div className="section">
              {!formSubmit1 ? (
                <form className="form">
                  <p className="subtitle">Please enter your name to start</p>
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
                <div className="game">
                  <p className="score">
                    Ready to play! Your score: {scorePlayer1}
                  </p>
                  <h3 className="name">
                    {formSubmit1 ? `Player ${formSubmit1}` : "Player 1"}
                  </h3>
                  {player1 === null ? (
                    "Here will be your choice"
                  ) : player1 ? (
                    <p className="symbol">Scissors ✂️</p>
                  ) : (
                    <p className="symbol">Stone 🪨</p>
                  )}

                  <button className="btn-play" onClick={handlePlayer1}>
                    Play!
                  </button>
                </div>
              )}
            </div>
            <div className="section">
              {!formSubmit2 ? (
                <form className="form">
                  <p className="subtitle">Please enter your name to start</p>
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
                <div className="game">
                  <p className="score">
                    Ready to play! Your score: {scorePlayer2}
                  </p>
                  <h3 className="name">
                    {formSubmit2 ? `Player ${formSubmit2}` : "Player 2"}
                  </h3>
                  {player2 === null ? (
                    "Here will be your choice"
                  ) : player2 ? (
                    <p className="symbol">Scissors ✂️</p>
                  ) : (
                    <p className="symbol">Stone 🪨</p>
                  )}
                  <button className="btn-play" onClick={handlePlayer2}>
                    Play!
                  </button>
                </div>
              )}
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
      {!start ? (
        <footer>
          <p>Made by SDR</p>
        </footer>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
