import { Button, Sidebar } from "flowbite-react";
import { RiHome3Line, RiProfileLine } from "react-icons/ri";
import { TbGoGame } from "react-icons/tb";
import { useAuthStore } from "../../zustand/store";
import SidebarLink from "./SidebarLink";

const DashboardSidebar = () => {
  const { logout } = useAuthStore();
  return (
    <Sidebar
      aria-label="Dashboard Sidebar"
      className="h-screen  bg-gray-50 shadow-md"
    >
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
            <SidebarLink href="/home" icon={RiHome3Line}>
              Home
            </SidebarLink>
            <SidebarLink href="/profile" icon={RiProfileLine}>
              Profile
            </SidebarLink>
            <SidebarLink href="/game" icon={TbGoGame}>
              Games
            </SidebarLink>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
        {/* Footer */}
        <Button
          color="light"
          pill
          onClick={logout}
          className="m-3 text-sm text-gray-600"
        >
          Déconnexion
        </Button>
      </div>
    </Sidebar>
  );
};

export default DashboardSidebar;
