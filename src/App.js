import { useEffect, useState } from "react";
import { useLocalStorageState } from "./useLocalStorageState";
import { motion } from "motion/react";

import ReactConfetti from "react-confetti";
import { WinnerAnnounce } from "./WinnerAnnounce";

function App() {
  const [resultPlayer1, setResultPlayer1] = useState("");
  const [resultPlayer2, setResultPlayer2] = useState("");
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [formSubmit1, setFormSubmit1] = useState("");
  const [formSubmit2, setFormSubmit2] = useState("");
  const [start, setStart] = useState(false);
  const [score1, setScorePlayer1] = useState(0);
  const [score2, setScorePlayer2] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  function handleGame() {
    let triggerForPlayer1 = Math.random().toFixed(1);
    let triggerForPlayer2 = Math.random().toFixed(1);

    if (triggerForPlayer1 < 0.3) {
      setResultPlayer1("scissors");
    } else if (triggerForPlayer1 >= 0.3 && triggerForPlayer1 <= 0.6) {
      setResultPlayer1("stone");
    } else if (triggerForPlayer1 >= 0.6 && triggerForPlayer1 <= 0.9) {
      setResultPlayer1("paper");
    }

    if (triggerForPlayer2 < 0.3) {
      setResultPlayer2("scissors");
    } else if (triggerForPlayer2 >= 0.3 && triggerForPlayer2 <= 0.6) {
      setResultPlayer2("stone");
    } else if (triggerForPlayer2 >= 0.6 && triggerForPlayer2 <= 0.9) {
      setResultPlayer2("paper");
    }
  }
  useEffect(
    function () {
      if (resultPlayer1 === "scissors" && resultPlayer2 === "paper") {
        return setScorePlayer1((state) => state + 1);
      } else if (resultPlayer1 === "paper" && resultPlayer2 === "stone") {
        return setScorePlayer1((state) => state + 1);
      } else if (resultPlayer1 === "stone" && resultPlayer2 === "scissors") {
        return setScorePlayer1((state) => state + 1);
      } else if (resultPlayer2 === "scissors" && resultPlayer1 === "paper") {
        return setScorePlayer2((state) => state + 1);
      } else if (resultPlayer2 === "paper" && resultPlayer1 === "stone") {
        return setScorePlayer2((state) => state + 1);
      } else if (resultPlayer2 === "scissors" && resultPlayer1 === "paper") {
        return setScorePlayer2((state) => state + 1);
      } else if (resultPlayer2 === resultPlayer1) return;
    },
    [resultPlayer1, resultPlayer2]
  );

  function handlePlayAgain() {
    setFormSubmit1("");
    setFormSubmit2("");
    setShowConfetti(false);
  }

  function handleReset() {
    setShowConfetti(true);
    setResultPlayer1("");
    setResultPlayer2("");
    setScorePlayer1(0);
    setScorePlayer2(0);
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
    localStorage.setItem("PlayerName1", JSON.stringify(name1));
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
          {showConfetti ? (
            <>
              <ReactConfetti />
              <WinnerAnnounce
                formSubmit1={formSubmit1}
                formSubmit2={formSubmit2}
                score1={score1}
                score2={score2}
                handlePlayAgain={handlePlayAgain}
              />
            </>
          ) : (
            <>
              <h2 className="title">Stone & Scissors Game</h2>
              <div className="fields">
                <div className="section">
                  {!formSubmit1 ? (
                    <form className="form">
                      <p className="subtitle">
                        Please enter your name to start
                      </p>
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
                        Ready to play! Your score: {score1 ? score1 : 0}
                      </p>
                      <h3 className="name">
                        {formSubmit1 ? `Player ${formSubmit1}` : "Player 1"}
                      </h3>
                      {!resultPlayer1 ? (
                        "Here will be your choice!"
                      ) : resultPlayer1 === "scissors" ? (
                        <p className="symbol">Scissors ✂️</p>
                      ) : resultPlayer1 === "paper" ? (
                        <p className="symbol">Paper 📃</p>
                      ) : resultPlayer1 === "stone" ? (
                        <p className="symbol">Stone 🪨</p>
                      ) : (
                        ""
                      )}
                    </div>
                  )}
                </div>
                <div className="section">
                  {!formSubmit2 ? (
                    <form className="form">
                      <p className="subtitle">
                        Please enter your name to start
                      </p>
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
                        Ready to play! Your score: {score2 ? score2 : 0}
                      </p>
                      <h3 className="name">
                        {formSubmit2 ? `Player ${formSubmit2}` : "Player 2"}
                      </h3>
                      {!resultPlayer2 ? (
                        "Here will be your choice!"
                      ) : resultPlayer2 === "scissors" ? (
                        <p className="symbol">Scissors ✂️</p>
                      ) : resultPlayer2 === "paper" ? (
                        <p className="symbol">Paper 📃</p>
                      ) : resultPlayer2 === "stone" ? (
                        <p className="symbol">Stone 🪨</p>
                      ) : (
                        ""
                      )}
                    </div>
                  )}
                </div>
              </div>
              {formSubmit1 && formSubmit2 ? (
                <button className="btn-play" onClick={() => handleGame()}>
                  Play!
                </button>
              ) : (
                ""
              )}

              <p className="annoucement">
                {resultPlayer1 === "" && resultPlayer2 === ""
                  ? "Let`s Play!"
                  : resultPlayer1 === resultPlayer2 ||
                    (resultPlayer1 && resultPlayer2) === ""
                  ? "It`s a draw, play again!"
                  : (resultPlayer1 === "scissors" &&
                      resultPlayer2 === "paper") ||
                    (resultPlayer1 === "paper" && resultPlayer2 === "stone") ||
                    (resultPlayer1 === "stone" && resultPlayer2 === "scissors")
                  ? `${formSubmit1} is a Winner!`
                  : (resultPlayer2 === "scissors" &&
                      resultPlayer1 === "paper") ||
                    (resultPlayer2 === "paper" && resultPlayer1 === "stone") ||
                    (resultPlayer2 === "stone" && resultPlayer1 === "scissors")
                  ? `${formSubmit2} is a Winner!`
                  : ""}
              </p>
              {score1 > 0 || score2 > 0 ? (
                <button className="btn-reset" onClick={handleReset}>
                  End game
                </button>
              ) : (
                ""
              )}
            </>
          )}
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
