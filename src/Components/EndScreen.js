import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { Questions } from '../Helpers/QuestionBank'
import "../App.css";

export default function EndScreen() {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const restartQuiz = () => {
      setScore(0);
      setGameState("menu");
  }

  return (
    <div className='endscreen'>
        {" "}
         <h1>Quiz Finished</h1>
         <h3> Your score is : {score} / {Questions.length}</h3>
         <button onClick={restartQuiz}>Restart Quiz</button>
    </div>

  )
}
