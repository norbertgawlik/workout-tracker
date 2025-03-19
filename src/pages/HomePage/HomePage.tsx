import { routesConfig } from "@routes/routesConfig";
import { PageContainer } from "@components/layout/Page";

export const HomePage = () => {
  return (
    <PageContainer header={routesConfig.home.label}>
      <div>Lorem ipsum</div>
    </PageContainer>
  );
};
