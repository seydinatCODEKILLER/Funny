import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Button } from "flowbite-react";
import { startQuizzSolo } from "../../services/quizzService";

const Room = () => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [quiz, setQuiz] = useState(null);

  const handleStartQuiz = async () => {
    if (!category || !difficulty) {
      toast.warning("Veuillez sélectionner une catégorie et une difficulté.");
      return;
    }

    try {
      const response = await startQuizzSolo({ category, difficulty });
      console.log(response);
    } catch (error) {
      console.log(error);

      toast.error(error.message);
    }
  };

  return (
    <div className="quiz-container">
      {!quiz ? (
        <div>
          <h1>Mode Solo</h1>
          <select onChange={(e) => setCategory(e.target.value)}>
            <option value="">Sélectionnez une catégorie</option>
            <option value="Histoire">Histoire</option>
            <option value="Sciences">Sciences</option>
            <option value="Sport">Sport</option>
          </select>

          <select onChange={(e) => setDifficulty(e.target.value)}>
            <option value="">Sélectionnez une difficulté</option>
            <option value="facile">Facile</option>
            <option value="moyen">Moyen</option>
            <option value="difficile">Difficile</option>
          </select>

          <Button onClick={handleStartQuiz}>Commencer le Quiz</Button>
        </div>
      ) : (
        <div>
          <h2>{quiz.title}</h2>
          {quiz.questions.map((q, index) => (
            <div key={index}>
              <p>{q.question}</p>
              {q.options.map((option, i) => (
                <button key={i}>{option}</button>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Room;
