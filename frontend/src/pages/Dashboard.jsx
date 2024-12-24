import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import useNotificationStore from "../zustand/notifications";

const Dashboard = () => {
  const { message, clearMessage } = useNotificationStore();
  const hasShownMessage = useRef(false);
  useEffect(() => {
    if (message && !hasShownMessage.current) {
      toast.success(message);
      clearMessage();
      hasShownMessage.current = true;
    }
  }, [message, clearMessage]);
  return (
    <h1 className="text-3xl text-gray-700 font-bold underline">Hello world!</h1>
  );
};

export default Dashboard;
