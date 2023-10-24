import React from "react";
import { useState } from "react";
import "./App.css";
import { QuizData } from "./Data/QuizData";
import QuizResult from "./components/QuizResult.jsx";

function App() {
  // console.log(QuizData.length,
  //   "hi", QuizData)

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  // const endQuiz = () => {
  //   return <h1>end</h1>
  //   console.log("end 1")
  // }
  function clickAction() {
    selectAction();
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0)
    } else {
      setShowResult(true)
    }
    
    // setClickedOption(0);

    // let index = 0;
    // let total = QuizData.length
  }

  // if (currentQuestion == QuizData.length) {
  //   setShowResult(true);
  // }

  const selectAction = () => {
    if (clickedOption === QuizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const resetAll=()=>{
    setShowResult(false);
    setCurrentQuestion(0);
    setClickedOption(0);
    setScore(0);
}

  return (
    <>
      <h1 className="heading-txt">Quiz App</h1>
      <div className="container">
        {showResult ? (
          <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll}/>
        ) : (
          <>
            <div className="question">{QuizData[currentQuestion].question}</div>

            <div className="option-container">
              {QuizData[currentQuestion].options.map((element, i) => {
                return (
                  <button
                    className={`option-btn ${
                      clickedOption == i + 1 ? "checked" : null
                    }`}
                    key={i}
                    onClick={() => setClickedOption(i + 1)}
                  >
                    {element}
                  </button>
                );
              })}
            </div>
            <input type="button" value="Next" id="next-button" onClick={clickAction}>
              
            </input>
          </>
        )}
      </div>
    </>
  );
}

export default App;
