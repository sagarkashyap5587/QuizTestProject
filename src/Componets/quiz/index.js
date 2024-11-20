import { Question } from "../question";
import arrayShuffle from "array-shuffle";
import Result from "../result";
import { generateQuestion } from "../../utils";
import Timer from "../timer";
import { useState } from "react";
import "../../style/index.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LocalImages from "../../assest";

const generateOption = () => {
  const array = [];
  const option1 = Math.floor(Math.random() * 50) + 1;
  const option2 = Math.floor(Math.random() * 50) + 1;
  const option3 = Math.floor(Math.random() * 50) + 1;
  array.push(option1);
  array.push(option2);
  array.push(option3);
  return array;
};

const Quiz = () => {
  const userData = useSelector((state) => state.incomes.data);
  const history = useNavigate();
  if(userData.length === 0) {
    history('/')
  }
  const testTypeDetail = userData[0].testType;
  const [currentQuestion, setCurrentQuestion] = useState(
    generateQuestion(testTypeDetail)
  );
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const option = generateOption();
  option.push(currentQuestion.answer);

  const shuffle = arrayShuffle(option);

  const questionNumberData = parseInt(userData[0].questionNumber);

  const handleSubmit = (value) => {
    if (parseFloat(value) === currentQuestion.answer) {
      setScore(score + 1);
    }
    if (questionNumber === questionNumberData) {
      setIsQuizOver(true);
    } else {
      setCurrentQuestion(generateQuestion(testTypeDetail));
      setQuestionNumber(questionNumber + 1);
    }
  };

  const handleRestart = () => {
    setScore(0);
    setQuestionNumber(1);
    setIsQuizOver(false);
    setCurrentQuestion(generateQuestion());
  };

  const onTime = () => {
    setIsQuizOver(true);
  };

  if (isQuizOver) {
    return <Result score={score} onRestart={() => handleRestart()} />;
  }

  return (
    <div className="main-background-setup">
      <div className="second-background">
      <center>
        <img className="quiz-image" src={LocalImages[0].Quiz}/>
        <h3 style={{ marginTop: "20px" }}>Quiz Type - {testTypeDetail}</h3>
        <br />
        <Question
          question={currentQuestion.question}
          questionNumber={questionNumber}
        />
        <button className="first" onClick={() => handleSubmit(shuffle[0])}>
          {shuffle[0]}
        </button>
        <button className="first" onClick={() => handleSubmit(shuffle[1])}>
          {shuffle[1]}
        </button>
        <button className="first" onClick={() => handleSubmit(shuffle[2])}>
          {shuffle[2]}
        </button>
        <button className="first" onClick={() => handleSubmit(shuffle[3])}>
          {shuffle[3]}
        </button>
        <Timer onTime={onTime}></Timer>
      </center>
    </div>
    </div>
  );
};

export default Quiz;
