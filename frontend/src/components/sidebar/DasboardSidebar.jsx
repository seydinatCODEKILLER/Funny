import { Button, Sidebar } from "flowbite-react";
import { RiHome3Line, RiProfileLine } from "react-icons/ri";
import { useAuthStore } from "../../zustand/store";

const DashboardSidebar = () => {
  const { logout } = useAuthStore();
  return (
    <Sidebar aria-label="Dashboard Sidebar" className="h-full font-roboto">
      <div className="flex flex-col justify-between h-full">
        {/* Logo */}
        <div className="p-3">
          <span className="text-md font-medium p-2 self-center bg-blue-500 rounded text-white">
            Funny
          </span>
        </div>
        {/* Navigation Links */}
        <Sidebar.Items className="flex flex-col text-lg">
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/home" icon={RiHome3Line} active>
              Home
            </Sidebar.Item>
            <Sidebar.Item href="/profile" icon={RiProfileLine}>
              Profile
            </Sidebar.Item>
            <Sidebar.Item href="/room" icon={RiProfileLine}>
              Room
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>

        {/* {Footer} */}
        <Button color="light" pill onClick={logout}>
          <span>Deconnexion</span>
        </Button>
      </div>
    </Sidebar>
  );
};

export default DashboardSidebar;
