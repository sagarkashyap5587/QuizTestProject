import "../../style/index.css";
export const Question = ({ question, questionNumber }) => {
  return (
    <>
      <h2 className="ques">
        <span className="question-color">
          Quiz-{questionNumber}{" "}
        </span>
        <span style={{ marginRight: "20px" }}></span> {question}
      </h2>
    </>
  );
};
