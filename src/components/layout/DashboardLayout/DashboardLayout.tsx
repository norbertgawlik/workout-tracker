import { Outlet } from "react-router-dom";
import { PageContainer } from "../PageContainer";
import { Menu } from "../Menu";
import { StyledMain } from "./DashboardLayout.styled";

export const DashboardLayout = () => {
  return (
    <PageContainer>
      <header>
        <Menu />
      </header>
      <StyledMain>
        <Outlet />
      </StyledMain>
    </PageContainer>
  );
};
