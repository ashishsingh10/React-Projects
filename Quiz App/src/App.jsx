import React from 'react'
import './App.css'
import { QuizData } from '../Data/QuizData'

function App() {
console.log("hi", QuizData)
  return (
    <>
      <h1>Quiz App</h1>
      <div className="container">
        

        <p>hi</p>
        <div className="question">{QuizData.map((element) => {
          return element.question
        })}</div>

        


      </div>
      
    </>
  )
}

export default App
