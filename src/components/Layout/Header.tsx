import styled from "styled-components";
import { Menu } from "./Menu";
import { theme } from "../../theme/theme";
import { Container } from "./Container";

const StyledHeader = styled.header`
  background: ${theme.colors.gray};
`;
export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Menu />
      </Container>
    </StyledHeader>
  );
};
