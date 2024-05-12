import { Props } from "@/types/Props";
import React from "react";

const LeftPanelLayout = ({ children }: Props) => {
  return (
    <div className="flex-none w-2/3 max-w-screen-xl">
      <div className="flex flex-col space-y-8">{children}</div>
    </div>
  );
};

export default LeftPanelLayout;
2;
