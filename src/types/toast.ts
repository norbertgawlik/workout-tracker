import { ToastOptions } from "react-toastify";

export type ToastType = {
  title?: string;
  content?: string;
  options?: ToastOptions;
};

export interface ToastContextType {
  showToast: (data: ToastType) => void;
}
