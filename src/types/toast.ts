import { ToastOptions } from "react-toastify";

export type ToastProps = {
  title?: string;
  content?: string;
  options?: ToastOptions;
};

export interface ToastContextType {
  showToast: (data: ToastProps) => void;
}
