import { useState } from "react";
import { Outlet } from "react-router-dom";
import useNotificationStore from "../zustand/notifications";
import { useAuthStore } from "../zustand/store";
import DashboardSidebar from "../components/sidebar/DasboardSidebar";
import Header from "../components/ui/Header";
import useNotification from "../hooks/useNotification";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { message, clearMessage } = useNotificationStore();
  const { user, logOut } = useAuthStore();

  // Gestion des notifications
  useNotification(message, clearMessage);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
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
        <Header
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
          logOut={logOut}
          avatar={user.avatar}
        />
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
