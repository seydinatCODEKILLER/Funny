import { useEffect, useRef } from "react";
import { toast } from "react-toastify";

const useNotification = (message, clearMessage) => {
  const hasShownMessage = useRef(false);

  useEffect(() => {
    if (message && !hasShownMessage.current) {
      toast.success(message);
      clearMessage();
      hasShownMessage.current = true;
    }
  }, [message, clearMessage]);
};

export default useNotification;
