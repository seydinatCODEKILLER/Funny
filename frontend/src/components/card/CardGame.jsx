/* eslint-disable react/prop-types */
import { Card } from "flowbite-react";

const CardGame = ({ title, description, onClick }) => {
  return (
    <Card className="cursor-pointer" onClick={onClick}>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </Card>
  );
};

export default CardGame;
