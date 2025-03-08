import { ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";

const StyledContainer = styled.div`
  ${theme.maxSize};
  margin: 0 auto;
  padding: 0 25px;
  box-sizing: border-box;
`;

type Props = {
  children: ReactNode;
};
export const Container = ({ children }: Props) => {
  return <StyledContainer>{children}</StyledContainer>;
};
