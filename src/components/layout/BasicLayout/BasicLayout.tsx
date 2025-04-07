import { Outlet } from "react-router-dom";
import { PageContainer } from "../PageContainer";

export const BasicLayout = () => {
  return (
    <PageContainer>
      <Outlet />
    </PageContainer>
  );
};
