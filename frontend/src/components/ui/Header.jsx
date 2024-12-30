/* eslint-disable react/prop-types */
import { Button } from "flowbite-react";
import { BiGridAlt } from "react-icons/bi";

const Header = ({ toggleSidebar, avatar }) => (
  <header className="flex items-center justify-between p-4 bg-white shadow lg:hidden">
    <Button
      className="text-gray-700 w-12 h-12 rounded-full flex items-center justify-center"
      color="light"
      onClick={toggleSidebar}
    >
      <BiGridAlt className="text-2xl" />
    </Button>
    <div className="flex items-center gap-3">
      <div className="h-11 w-11 rounded-full">
        <img
          src={avatar}
          className="h-11 w-11 rounded-full object-cover"
          alt="user"
        />
      </div>
    </div>
  </header>
);

export default Header;
