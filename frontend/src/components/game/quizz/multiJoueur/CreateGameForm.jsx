/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { Button, Label, Select, Spinner, TextInput } from "flowbite-react";
import { RiAiGenerateText } from "react-icons/ri";

const CreateGameForm = ({ onSubmit, loading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-3"
    >
      <div className="">
        <Label value="Questions" className="text-start" />
        <TextInput
          type="text"
          placeholder="Nombre de questions"
          {...register("questionsCount", {
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
          className={errors.questionsCount ? "border-red-500" : ""}
        />
        {errors.questionsCount && (
          <p className="text-red-500 text-sm mt-2">
            {errors.questionsCount.message}
          </p>
        )}
      </div>
      <div className="">
        <Label value="Category" className="text-start" />
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
      <div className="">
        <Label value="Difficulte" className="text-start" />
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
          <p className="text-red-500 text-sm">{errors.difficulty.message}</p>
        )}
      </div>
      <div className="">
        <Label value="Temps de reponse" className="text-start" />
        <TextInput
          type="text"
          placeholder="duree de reponse"
          {...register("timePerQuestion", {
            required: "Le nombre de questions est obligatoire",
            min: {
              value: 5,
              message: "Le nombre doit être supérieur ou égal à 5",
            },
            max: {
              value: 30,
              message: "Le nombre doit être inférieur ou égal à 30",
            },
          })}
          className={errors.timePerQuestion ? "border-red-500" : ""}
        />
        {errors.timePerQuestion && (
          <p className="text-red-500 text-sm mt-2">
            {errors.timePerQuestion.message}
          </p>
        )}
      </div>
      {/* Repeat similar blocks for other fields */}
      <Button type="submit" gradientDuoTone="purpleToPink" className="w-full">
        {loading ? (
          <div className="flex items-center gap-2">
            <Spinner />
            <span className="animate-pulse">Chargement...</span>
          </div>
        ) : (
          <>
            <RiAiGenerateText className="mr-2 h-4 w-4" />
            <span>Creation du partie</span>
          </>
        )}
      </Button>
    </form>
  );
};

export default CreateGameForm;
