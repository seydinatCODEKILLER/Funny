import { useState } from "react";
import { Modal } from "flowbite-react";

const Quizz = () => {
  const [showModal, setShowModal] = useState(false);

  const handleStartSolo = () => {
    setShowModal(true);
  };

  return (
    <div className="font-roboto">
      <h1 className="text-3xl font-bold mb-4">Quiz</h1>
      <div className="flex gap-4">
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          onClick={handleStartSolo}
        >
          Mode Solo
        </button>
        <button
          className="bg-gray-400 text-white py-2 px-4 rounded cursor-not-allowed"
          disabled
        >
          Mode Multijoueur (à venir)
        </button>
      </div>

      {/* Modal */}
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>Démarrer une Partie Solo</Modal.Header>
        <Modal.Body>
          <p>Êtes-vous prêt à commencer?</p>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={() => {
              console.log("Démarrage de la partie solo...");
              setShowModal(false);
            }}
          >
            Commencer
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Quizz;
