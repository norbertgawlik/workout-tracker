import { Outlet } from "react-router-dom";
import { PageContainer } from "../PageContainer";
import { Menu } from "../Menu";

export const DashboardLayout = () => {
  return (
    <PageContainer>
      <header>
        <Menu />
      </header>
      <main>
        <Outlet />
      </main>
    </PageContainer>
  );
};
