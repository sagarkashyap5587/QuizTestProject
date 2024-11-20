

export const generateQuestion = (value) => {
  const operations = ["+", "-", "*", "/"];
  const num1 = Math.floor(Math.random() * 50) + 1;
  const num2 = Math.floor(Math.random() * 50) + 1;
  const num3 = Math.floor(Math.random() * 50) + 1;
  const num4 = Math.floor(Math.random() * 50) + 1;
  const operation = operations[Math.floor(Math.random() * operations.length)];
  const operation2 = operations[Math.floor(Math.random() * operations.length)];
  const operation3 = operations[Math.floor(Math.random() * operations.length)];

  if (value === "Easy") {
    const question = `${num1} ${operation} ${num2}`;
    const answer = eval(question);
    return {
      question,
      answer: parseFloat(answer.toFixed(2)),
    };
  } else if (value === "Medium") {
    const question = `${num1} ${operation} ${num2} ${operation2}  ${num3}`;
    const answer = eval(question);
    return {
      question,
      answer: parseFloat(answer.toFixed(2)),
    };
  } else if (value === "Hard") {
    const question = `${num1} ${operation} ${num2} ${operation2}  ${num3}  ${operation3} ${num4}`;
    const answer = eval(question);
    return {
      question,
      answer: parseFloat(answer.toFixed(2)),
    };
  } else {
    const question = `${num1} ${operation} ${num2}`;
    const answer = eval(question);
    return {
      question,
      answer: parseFloat(answer.toFixed(2)),
    };
  }
};


export const generateOption = () => {
  const array = [];
  const option1 = Math.floor(Math.random() * 50) + 1;
  const option2 = Math.floor(Math.random() * 50) + 1;
  const option3 = Math.floor(Math.random() * 50) + 1;
  array.push(option1);
  array.push(option2);
  array.push(option3);
  return array;
};
