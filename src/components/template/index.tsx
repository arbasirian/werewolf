import React from 'react';

interface Props {
  header: React.ReactNode;
}
const TemplateContainer: React.FC<React.PropsWithChildren<Props>> = ({
  header,
  children
}) => {
  return (
    <div>
      <div>{header}</div>
      <div>{children}</div>
    </div>
  );
};

export default TemplateContainer;
