import React from "react";

// Define a functional component called AnswerButton
export default function AnswerButton(props) {
  // Initialize the color variable to an empty string
  let color = "";

  // If the game has ended, check if the answer is correct and set the color variable accordingly
  if (props.gameEnd) {
    if (props.answer == props.correctAnswer) {
      color = "#94D7A2";
    } else if (
      props.isSelected != props.correctAnswer &&
      props.isSelected == props.answer
    ) {
      color = "#F8BCBC";
    }
  }
  // If the game is still ongoing and the current answer button is selected, set the color to light blue
  else if (props.isSelected == props.answer) {
    color = "#D6DBF5";
  }

  // Create a styles object that sets the background color of the button based on the color variable
  const styles = {
    backgroundColor: color,
  };

  // Render a button with the appropriate background color, text label, and click event handler
  return (
    <button
      style={styles}
      className="answerBtn btn"
      onClick={!props.gameEnd ? props.handleClick : undefined}
    >
      {props.answer}
    </button>
  );
}
