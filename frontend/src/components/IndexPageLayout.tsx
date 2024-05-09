import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title?: string;
  description?: string;
  favicon?: string;
};

const IndexPageLayout = ({ children }: Props) => {
  return <div className="flex">{children}</div>;
};

export default IndexPageLayout;
