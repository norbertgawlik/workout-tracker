import { ToastContextType, ToastProps } from "@mytypes/toast";
import { CustomToast } from "@ui/Toast";
import { createContext, ReactNode, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";

const ToastContext = createContext<ToastContextType | undefined>(undefined);
ToastContext.displayName = "ToastContext";

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const showToast = ({ title = "", content = "", options }: ToastProps) => {
    toast(<CustomToast title={title} content={content} />, {
      theme: "colored",
      type: "info",
      ...options,
    });
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      <ToastContainer />
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast should be in Provider");
  }
  return context;
};
