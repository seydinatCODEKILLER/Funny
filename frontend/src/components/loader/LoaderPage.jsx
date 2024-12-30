import { Spinner } from "flowbite-react";
const LoaderPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center gap-4">
        <Spinner size="md" aria-label="Chargement en cours..." />
        <p className="text-md font-medium">Veuillez patientez....</p>
      </div>
    </div>
  );
};

export default LoaderPage;
