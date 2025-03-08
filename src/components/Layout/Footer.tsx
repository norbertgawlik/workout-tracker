import styled from "styled-components";
import { theme } from "../../theme/theme";
import { Container } from "./Container";

const StyledFooter = styled.footer`
  background: ${theme.colors.gray};
  padding: ${theme.spacing.md} 0;
  text-align: center;
  ${theme.fontSize.xs}
`;
export const Footer = () => {
  return (
    <StyledFooter>
      <Container>Copyright 2025</Container>
    </StyledFooter>
  );
};
