const Result = ({ score, onRestart }) => {
  return (
    <div>
      <h1>Your Score: {score}</h1>
      <button onClick={onRestart} style={{padding:"10px 20px", color:"white", backgroundColor:"blue", fontSize:"20px", marginTop:'20px', cursor:"pointer"}}>Restart Quiz</button>
    </div>
  );
};

export default Result;
