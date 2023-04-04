import React from "react";

export default function StartPage(props) {
  // this component is a simple start page with a header, sub-header, and a start button
  return (
    <div className="startPageContainer">
      <h1 className="startPageHeader">Quizzical</h1>
      <h3 className="startPageSubHeader">Answer trivia questions!</h3>
      <button onClick={props.handleClick} className="startBtn btn">
        Start Quiz
      </button>
    </div>
  );
}
