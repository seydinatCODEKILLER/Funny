import { useNavigate } from "react-router-dom";
import CardGame from "../components/card/CardGame";

const Room = () => {
  const navigate = useNavigate();
  return (
    <div className="font-roboto">
      <h1 className="text-2xl font-bold mb-4">Mes Jeux</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <CardGame
          title="Quizz"
          description="Testez vos connaissances !"
          onClick={() => navigate("/game/quiz")}
        />
      </div>
    </div>
  );
};

export default Room;
