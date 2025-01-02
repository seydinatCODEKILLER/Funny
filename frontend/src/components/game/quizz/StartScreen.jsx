/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { Button, Label, Spinner, TextInput, Select } from "flowbite-react";
import { RiAiGenerateText } from "react-icons/ri";

const StartScreen = ({ isLoading, onStart }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    const { nbQuestions, difficulty, category } = data;
    onStart({ nbQuestions, difficulty, category });
  };
  return (
    <div className="relative px-3 md:px-0 flex items-center justify-center min-h-screen bg-gradient-to-b from-white to-blue-100 overflow-hidden font-roboto">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-40 top-10 left-1/4 animate-float"></div>
        <div className="absolute w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-40 top-1/2 left-1/3 animate-float-slow"></div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center transform transition-all duration-300 hover:shadow-xl">
        <p className="text-gray-600 text-md mb-6">
          Générez un quiz et testez vos connaissances! 🌞
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-3"
        >
          {/* Nombre de questions */}
          <div className="flex flex-col gap-1 w-full">
            <Label value="Questions" className="text-start" />
            <TextInput
              id="nbQuestions"
              type="text"
              placeholder="Le nombre de questions"
              {...register("nbQuestions", {
                required: "Le nombre de questions est obligatoire",
                min: {
                  value: 1,
                  message: "Le nombre doit être supérieur ou égal à 1",
                },
                max: {
                  value: 10,
                  message: "Le nombre doit être inférieur ou égal à 10",
                },
              })}
              className={errors.nbQuestions ? "border-red-500" : ""}
            />
            {errors.nbQuestions && (
              <p className="text-red-500 text-sm mt-2">
                {errors.nbQuestions.message}
              </p>
            )}
          </div>
          {/* Difficulté */}
          <div className="">
            <Select
              {...register("difficulty", {
                required: "Le niveau de difficulté est obligatoire",
              })}
              className={errors.difficulty ? "border-red-500" : ""}
            >
              <option value="">Choisir une difficulté</option>
              <option value="easy">Facile</option>
              <option value="medium">Moyen</option>
              <option value="hard">Difficile</option>
            </Select>
            {errors.difficulty && (
              <p className="text-red-500 text-sm">
                {errors.difficulty.message}
              </p>
            )}
          </div>
          {/* Catégorie */}
          <div className="">
            <Select
              {...register("category", {
                required: "La catégorie est obligatoire",
              })}
              className={errors.category ? "border-red-500" : ""}
            >
              <option value="">Choisir une catégorie</option>
              <option value="21">Culture Générale</option>
              <option value="21">Sciences</option>
              <option value="21">Histoire</option>
            </Select>
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category.message}</p>
            )}
          </div>
          <div className="w-full">
            <Button
              type="submit"
              className="font-bold text-lg focus:outline-none transition-transform duration-300 hover:scale-105 w-full"
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
        </form>
      </div>
    </div>
  );
};

export default StartScreen;
