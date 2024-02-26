import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import StartQuiz from "./StartQuiz";

export default function SecondQuiz() {
  const [number, setNumber] = useState("");
  const [inputValues, setInputValues] = useState([]);
  const [questionAnswer, setQuestionAnswer] = useState([]);
  const navigate = useNavigate();
  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const handleEvent = (evt, index) => {
    setQuestionAnswer((prevQuestionAnswer) => {
      const updatedQuestionAnswer = [...prevQuestionAnswer];
      if (!updatedQuestionAnswer[index]) {
        updatedQuestionAnswer[index] = { question: "", answer: "" };
      }
      updatedQuestionAnswer[index][evt.target.name] = evt.target.value;
      return updatedQuestionAnswer;
    });
  };

  const submit = () => {
    const num = parseInt(number);
    setNumber(num);
    setInputValues(new Array(num).fill({ question: "", answer: "" }));
  };

  const addData = () => {
    const dataString = JSON.stringify(questionAnswer);
    navigate(`/start-quiz/${dataString}`);
  };

  return (
    <div className="w-1/2 bg-slate-100 flex-col justify-center m-auto mt-8 rounded-md p-6">
      <div className="flex  justify-center">
        <h1 className=" text-blue-500 text-lg">Quiz App</h1>
      </div>
      <div className="flex justify-center mt-8">
        <input
          className=" bg-gray-50 border border-blue-400 text-blue-400  text-base rounded-md"
          type="number"
          value={number}
          onChange={onChange}
        />
        <button
          className="bg-blue-500 text-white text-base ml-4 rounded-md p-1"
          onClick={submit}
        >
          Enter No
        </button>
      </div>
      {number && (
        <div>
          {inputValues?.map((value, index) => (
            <div
              className="flex flex-col justify-start border-b pb-6 border-black "
              key={index}
            >
              <label>Question</label>
              <input
                className=" bg-gray-50 border border-blue-400 text-blue-400   rounded-md mt-2 text-lg"
                type="text"
                value={questionAnswer[index]?.question}
                name="question"
                onChange={(e) => handleEvent(e, index)}
              />
              <label>Answer</label>
              <input
                className=" bg-gray-50 border border-blue-400 text-blue-400   rounded-md mt-2 text-lg"
                type="text"
                value={questionAnswer[index]?.answer}
                name="answer"
                onChange={(e) => handleEvent(e, index)}
              />
            </div>
          ))}
          <div className="flex flex-col justify-end mt-4">
            <button
              className="bg-blue-500 text-white text-base  rounded-md p-1 "
              onClick={() => addData()}
            >
              Add Data
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
