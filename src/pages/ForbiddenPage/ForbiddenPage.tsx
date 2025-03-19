import { PageContainer } from "@components/layout/Page";
import { routesConfig } from "@routes/routesConfig";
import { Paragraph } from "@ui/Paragraph";

export const ForbiddenPage = () => {
  return (
    <PageContainer header={routesConfig.forbidden.label}>
      <Paragraph>No permissions</Paragraph>
    </PageContainer>
  );
};
