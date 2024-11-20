const Result = ({ score, onRestart }) => {
  return (
    <div>
      <h1>Your Score: {score}</h1>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
};

export default Result;
