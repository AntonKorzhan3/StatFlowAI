import Head from "next/head";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title?: string;
  description?: string;
  favicon?: string;
};

const Layout = ({ children }: Props) => (
  <div className="min-h-screen bg-gray-50 font-basier-circle chatBox">
    {children}
  </div>
);

export default Layout;
