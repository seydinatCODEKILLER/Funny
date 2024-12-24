/* eslint-disable react/no-unescaped-entities */
import { Button, TextInput, Label, Spinner } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { LuMail, LuLock } from "react-icons/lu";
import { Img } from "react-image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import LoginImage from "../../assets/login.jpg";
import useLogin from "../../hooks/useLogin";
import { useAuthStore } from "../../zustand/store";
import { useEffect } from "react";
const Login = () => {
  const navigate = useNavigate();
  const { token } = useAuthStore();
  useEffect(() => {
    if (token) {
      navigate("/", { replace: true });
    }
  }, [token, navigate]);
  const { handleLogin, loading } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    handleLogin(data);
  };

  return (
    <div className="h-screen flex font-roboto">
      <div className="hidden lg:block w-1/2 h-full relative">
        <Img
          src={LoginImage}
          alt="register image"
          className="h-full w-full object-cover"
          loader={<Skeleton className="rounded-lg w-full h-full" />}
        />
        <p className="absolute bottom-0 p-3 text-white font-medium text-sm">
          veuillez vous connecter en utilisant vos identifiants. Si vous êtes
          déjà inscrit, entrez simplement votre nom d'utilisateur et votre mot
          de passe pour continuer. Si vous n'avez pas encore de compte, vous
          pouvez facilement vous inscrire en quelques étapes. Assurez-vous de
          garder vos informations de connexion en sécurité. Nous sommes ravis de
          vous retrouver et vous souhaitons une excellente navigation
        </p>
        <div className="absolute top-0 p-3">
          <p className="p-2 bg-blue-500 self-center font-semibold rounded text-white">
            Funny
          </p>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className="w-full px-4 py-5 md:w-[520px] bg-white shadow-md rounded-lg md:p-4 flex flex-col gap-4">
          <div className="flex flex-col">
            <p className="text-2xl font-medium text-center">
              Ravis de vous revoir 🎯
            </p>
            <span className="text-sm text-gray-400 text-center">
              Veuillez renseignez vos informations.
            </span>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-4"
          >
            {/* Email */}
            <div className="flex flex-col gap-1 w-full">
              <Label value="Email" />
              <TextInput
                id="email"
                type="email"
                placeholder="Votre adresse email"
                rightIcon={LuMail}
                {...register("email", {
                  required: "L'email est requis",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "L'adresse email n'est pas valide",
                  },
                })}
                className={`${errors.email ? "border-red-500" : ""}`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Mot de passe */}
            <div className="flex flex-col gap-1 w-full">
              <Label value="Mot de passe" />
              <TextInput
                id="password"
                type="password"
                placeholder="Votre mot de passe"
                rightIcon={LuLock}
                {...register("password", {
                  required: "Le mot de passe est requis",
                })}
                className={`${errors.password ? "border-red-500" : ""}`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.password.message}
                </p>
              )}
            </div>

            <Button
              gradientDuoTone="purpleToBlue"
              className="w-full"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center gap-3">
                  <Spinner size="md" aria-label="Chargement en cours..." />
                  <p className="text-sm font-medium">Chargement</p>
                </div>
              ) : (
                <p className="text-sm font-medium">Connexion</p>
              )}
            </Button>
          </form>
          <div className="flex flex-col items-center">
            <p className="text-gray-500 font-medium">
              Vous n'avez pas de compte ?{" "}
              <Link to="/register" className="text-blue-500 underline">
                S'inscrire
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
