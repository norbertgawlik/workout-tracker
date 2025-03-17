import { PageContainer } from "@components/layout/Page";
import { routesConfig } from "@routes/routesConfig";
import { Paragraph } from "@ui/Paragraph";

export const NotFoundPage = () => {
  return (
    <>
      <PageContainer header={routesConfig.notfound.label}>
        <Paragraph>Page not found</Paragraph>
      </PageContainer>
    </>
  );
};
