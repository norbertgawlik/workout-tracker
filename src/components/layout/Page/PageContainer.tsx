import { Boxhead } from "@ui/Boxhead";
import { ReactNode } from "react";
import { Container } from "../Container";

type Props = {
  children?: ReactNode;
  header?: string;
};

export const PageContainer = ({ children, header }: Props) => {
  return (
    <Container>
      {header ? <Boxhead>{header}</Boxhead> : null}
      {children}
    </Container>
  );
};
