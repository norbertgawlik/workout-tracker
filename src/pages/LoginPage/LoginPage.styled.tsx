import { theme } from "@theme";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledRegister = styled.p``;

export const StyledRegisterLink = styled(Link)`
  color: ${theme.colors.secondary};
  text-decoration: underline;
  margin: 0 ${theme.spacing.xs};
`;
