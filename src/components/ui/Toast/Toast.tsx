import { ToastContentProps } from "react-toastify";
import {
  StyledToastContent,
  StyledToastHeader,
  StyledToastWrapper,
} from "./Toast.styled";

type CustomToastProps = ToastContentProps<{
  title: string;
  content: string;
}>;

export function CustomToast({ data }: CustomToastProps) {
  return (
    <StyledToastWrapper>
      <StyledToastHeader>{data.title}</StyledToastHeader>
      <StyledToastContent>{data.content}</StyledToastContent>
    </StyledToastWrapper>
  );
}
