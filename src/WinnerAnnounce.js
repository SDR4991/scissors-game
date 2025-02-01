export function WinnerAnnounce({
  formSubmit1,
  formSubmit2,
  score1,
  score2,
  handlePlayAgain,
}) {
  return (
    <div className="overlay">
      <div className="winner-announce">
        {score1 > score2 ? (
          <h2>{formSubmit1} is a Winner! 😎 Congratulations!</h2>
        ) : (
          <h2>{formSubmit2} is a Winner! 😎 Congratulations</h2>
        )}

        <button className="btn-start" onClick={() => handlePlayAgain()}>
          Play again!
        </button>
      </div>
    </div>
  );
}
