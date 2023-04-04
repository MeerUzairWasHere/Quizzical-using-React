import React, { useState, useEffect } from "react";
import AnswerButton from "./AnswerButton";

export default function SingleQuestion(props) {
  const [selected, setSelected] = useState(); // state to keep track of selected answer
  const { question, correctAnswer, allAnswers, id } = props.question; // destructuring props to access question details

  function handleAnswerClick(event) {
    // function to handle answer button click
    let selectedAnswer = event.target.innerText;
    setSelected(selectedAnswer); // updating selected state with the clicked answer
  }

  useEffect(() => {
    // useEffect hook to update parent component's state with the selected answer
    props.updateSelectedAnswer(id, selected); // calling the updateSelectedAnswer function passed down from parent component
  }, [selected]); // running the effect only when the selected state changes

  const answerButtonEls = allAnswers.map((answer, index) => {
    // mapping through all possible answers to create AnswerButton components
    return (
      <AnswerButton
        key={index}
        answer={answer}
        correctAnswer={correctAnswer}
        isSelected={selected}
        handleClick={handleAnswerClick}
        gameEnd={props.gameEnd}
      />
    );
  });

  return (
    <div className="singleQuestionContainer">
      <h1 className="questionHeader">{question}</h1>{" "}
      {/* displaying the question */}
      <div className="answerContainer">
        {answerButtonEls} {/* displaying all answer buttons */}
      </div>
    </div>
  );
}
