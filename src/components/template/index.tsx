import React from "react";
import { FooterContainer } from "./template.styles";

interface Props {
  header: React.ReactNode;
  footer?: React.ReactNode;
}
const TemplateContainer: React.FC<React.PropsWithChildren<Props>> = ({
  header,
  footer,
  children
}) => {
  return (
    <div>
      <div>{header}</div>
      <div>{children}</div>
      {footer && <FooterContainer>{footer}</FooterContainer>}
    </div>
  );
};

export default TemplateContainer;
