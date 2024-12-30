import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { Outlet } from "react-router-dom";
import useNotificationStore from "../zustand/notifications";
import { useAuthStore } from "../zustand/store";
import DashboardSidebar from "../components/sidebar/DasboardSidebar";
import { BiGridAlt, BiLogOut } from "react-icons/bi";
import { Button } from "flowbite-react";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { message, clearMessage } = useNotificationStore();
  const { user, logOut } = useAuthStore();
  const hasShownMessage = useRef(false);
  useEffect(() => {
    if (message && !hasShownMessage.current) {
      toast.success(message);
      clearMessage();
      hasShownMessage.current = true;
    }
  }, [message, clearMessage]);
  return (
    <div className="flex h-screen">
      <div
        className={`fixed inset-y-0 left-0 z-20 transform bg-green-400 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0 lg:w-64`}
      >
        <DashboardSidebar />
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-10 bg-black opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between p-4 bg-white shadow lg:hidden">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            <BiGridAlt className="text-2xl" />
          </button>
          <div className="flex items-center gap-3">
            <Button
              color="light"
              className="h-11 w-11 flex items-center justify-center rounded-full"
              onClick={logOut}
            >
              <BiLogOut className="text-lg" />
            </Button>
            <div className="h-11 w-11 rounded-full">
              <img
                src={`${user.avatar}`}
                className="h-11 w-11 rounded-full object-cover"
                alt=""
              />
            </div>
          </div>
        </header>
        {/* Main Content Area */}
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
