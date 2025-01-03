/* eslint-disable react/prop-types */
const ResultMessage = ({ result }) => {
  const getMessage = () => {
    switch (result) {
      case "win":
        return "Félicitations, vous avez tout réussi ! 🎉";
      case "draw":
        return "Bien joué, mais vous pouvez encore progresser. 😊";
      case "lose":
        return "Ne vous découragez pas, réessayez ! 💪";
      default:
        return "Quiz Terminé!";
    }
  };

  return (
    <h2 className="text-3xl font-bold text-blue-600 mb-4 animate-bounce">
      {getMessage()}
    </h2>
  );
};

export default ResultMessage;
