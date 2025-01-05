import { useEffect, useRef } from "react";
import { toast } from "react-toastify";

const useNotification = (message, clearMessage, type = "success") => {
  const hasShownMessage = useRef(false);

  useEffect(() => {
    if (message && !hasShownMessage.current) {
      switch (type) {
        case "success":
          toast.success(message);
          break;
        case "error":
          toast.error(message);
          break;
        case "info":
          toast.info(message);
          break;
        case "warning":
          toast.warn(message);
          break;
        default:
          toast(message);
          break;
      }
      clearMessage();
      hasShownMessage.current = true;
    }
  }, [message, type, clearMessage]);
};

export default useNotification;
