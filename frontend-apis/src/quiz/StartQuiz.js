import React, { useState } from "react";
import SecondQuiz from "./SecondQuiz";
import { useParams } from "react-router-dom";

const StartQuiz = () => {
  const { data } = useParams();
  const questionAnswer = JSON.parse(data);
  const initialAnswers = Array(questionAnswer.length).fill("");
  const [answers, setAnswers] = useState(initialAnswers);
  const [score, setScore] = useState(0);
  const [resultVisible, setResultVisible] = useState(false);

  const changeEvent = (index, value) => {
    const newData = [...answers];
    newData[index] = value;
    setAnswers(newData);
  };
  const submit = () => {
    let userScore = 0;
    questionAnswer.map((item, index) => {
      if (answers[index] === item.answer) {
        userScore++;
      }
      setScore(userScore);
      setResultVisible(true);
    });
    console.log(userScore);
  };
  const handleRestart = () => {
    setAnswers(initialAnswers);
    setScore(0);
    setResultVisible(false);
  };
  return (
    <div className="w-1/2 bg-slate-100 flex-col justify-center m-auto mt-8 rounded-md p-6">
      <div className="justify-center flex">
        <h1 className="text-blue-400 uppercase font-serif my-4">Start Quiz</h1>
      </div>
      {questionAnswer.map((item, index) => (
        <div key={index}>
          <strong>Question{index + 1}: </strong>
          {item.question}
          <div className="justify-center flex flex-col">
            <input
              className=" bg-gray-50 border border-blue-400 text-blue-400  text-base rounded-md"
              type="text"
              value={answers[index]}
              onChange={(e) => changeEvent(index, e.target.value)}
            />
            {resultVisible && (
              <p className="text-red-500">
                {answers[index] === item.answer ? "correct" : item.answer}
              </p>
            )}
          </div>
          <br />
        </div>
      ))}
      <div>
        {resultVisible ? (
          <div className="flex flex-col justify-center items-center w-full">
            <p className="text-blue-400 font-serif">Your Score: {score}</p>
            <button
              className="bg-blue-500 text-white p-2 rounded-md my-4 w-full"
              onClick={handleRestart}
            >
              Restart
            </button>
          </div>
        ) : (
          <button
            className="bg-blue-500 text-white p-2 rounded-md my-4 w-full"
            onClick={submit}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};
export default StartQuiz;
