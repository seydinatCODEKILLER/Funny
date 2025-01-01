/* eslint-disable react/prop-types */

import { Button, Spinner } from "flowbite-react";
import { RiAiGenerateText } from "react-icons/ri";

const StartScreen = ({ isLoading, onStart }) => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-white to-blue-100 overflow-hidden font-roboto">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-40 top-10 left-1/4 animate-float"></div>
        <div className="absolute w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-40 top-1/2 left-1/3 animate-float-slow"></div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center transform transition-all duration-300 hover:shadow-xl">
        <p className="text-gray-600 text-lg mb-6">
          Générez un quiz et testez vos connaissances!
        </p>
        <div className="flex justify-center">
          <Button
            onClick={onStart}
            className="font-bold text-lg focus:outline-none transition-transform duration-300 hover:scale-105"
            disabled={isLoading}
            gradientDuoTone="purpleToBlue"
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <Spinner />
                <span className="animate-pulse">Chargement...</span>
              </div>
            ) : (
              <>
                <RiAiGenerateText className="mr-2 h-4 w-4" />
                <span>Commencer</span>
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
