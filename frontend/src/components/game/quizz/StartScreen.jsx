/* eslint-disable react/prop-types */

const StartScreen = ({ isLoading, onStart }) => (
  <div className="p-6 text-center">
    <h2 className="text-2xl font-bold">Mode Solo</h2>
    <p>Générez et répondez à un quiz!</p>
    <button
      onClick={onStart}
      className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      disabled={isLoading}
    >
      {isLoading ? "Chargement..." : "Commencer"}
    </button>
  </div>
);
export default StartScreen;
