import { ReactNode } from "react";
import { StyledAlert } from "./Alert.styled";

export type AlertOptions = "info" | "warning" | "error" | "success";

export type AlertProps = {
  children: ReactNode;
  variant?: AlertOptions;
};

export const Alert = ({ children, ...props }: AlertProps) => {
  return <StyledAlert {...props}>{children}</StyledAlert>;
};
