/* eslint-disable react/prop-types */
import { Badge, Card } from "flowbite-react";

const CardGame = ({ title, description, onClick, icon: Icon }) => {
  return (
    <div
      className="group relative cursor-pointer transform transition-transform duration-300 hover:scale-105"
      onClick={onClick}
    >
      {/* Decorative floating glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

      {/* Card content */}
      <Card className="relative bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex items-center justify-between">
          <Badge color="info" icon={Icon}>
            {title}
          </Badge>
        </div>
        <p className="text-gray-600 mt-2 group-hover:text-gray-800 transition-colors duration-300">
          {description}
        </p>
      </Card>
    </div>
  );
};

export default CardGame;
