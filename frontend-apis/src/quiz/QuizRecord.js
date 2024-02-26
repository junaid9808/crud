import React, { useState } from "react";

import { quizData } from "./quizData";

export default function QuizRecord() {
  const initialAnswers = Array(quizData.length).fill("");
  const [answer, setAnswer] = useState(initialAnswers);
  const [score, setScore] = useState(0);
  const [resultVisible, setResultVisible] = useState(false);

  const changeEvent = (index, value) => {
    const newdata = [...answer];
    newdata[index] = value;
    setAnswer(newdata);
  };
  const display = () => {
    let userScore = 0;
    quizData.map((item, index) => {
      if (answer[index] === item.answer) {
        userScore++;
      }
      setScore(userScore);
      setResultVisible(true);
    });
    console.log(userScore);
  };
  const handleRestart = () => {
    setAnswer(initialAnswers);
    setScore(0);
    setResultVisible(false);
  };
  return (
    <div className="w-1/2 bg-slate-100 flex-col justify-center m-auto mt-8 rounded-md p-6">
      <div className="flex justify-center">
        <h1 className="text-blue-400 uppercase font-serif my-4 ">Quiz App</h1>
      </div>
      {quizData.map((item, index) => (
        <div key={index}>
          <p>{item.question}</p>
          <input
            className=" bg-gray-50 border border-blue-400 text-blue-400  text-base rounded-md"
            type="text"
            value={answer[index]}
            onChange={(e) => changeEvent(index, e.target.value)}
          />
          {resultVisible && (
            <p className="text-red-500">
              {answer[index] === item.answer ? "correct" : item.answer}
            </p>
          )}
        </div>
      ))}
      <div className="flex justify-center flex-col items-center">
        {resultVisible ? (
          <div className="flex justify-center flex-col items-center w-full">
            <p className="text-lg font-sans">Your score: {score}</p>
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
            onClick={display}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
