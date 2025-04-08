import { theme } from "@theme";
import { Boxhead } from "@ui/Boxhead";
import { StyledSecondaryButton } from "@ui/Button/Button.styled";
import { Paragraph } from "@ui/Paragraph";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledBoxhead = styled(Boxhead)`
  text-align: center;
`;

export const StyledButton = styled(StyledSecondaryButton)`
  margin-top: ${theme.spacing.md};
  margin: 0 auto;
  align-self: center;
`;

export const StyledButtonWrap = styled.div`
  ${theme.helpers.flexCenter};
  margin: ${theme.spacing.sm};
`;

export const StyledParagraph = styled(Paragraph)`
  text-align: center;
  margin: ${theme.spacing.xl} auto;
  max-width: 350px;
`;

export const StyledRegisterLink = styled(Link)`
  color: ${theme.colors.secondary};
  text-decoration: underline;
  margin: 0 ${theme.spacing.xs};
`;
