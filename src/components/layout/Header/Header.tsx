import { Menu } from "../Menu";
import { Container } from "../Container";
import { StyledHeader } from "./Header.styled";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Menu />
      </Container>
    </StyledHeader>
  );
};
