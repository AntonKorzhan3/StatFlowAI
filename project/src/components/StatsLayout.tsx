import React from "react";
import { Props } from "@/types/Props";

const StatsLayout = ({ children }: Props) => {
  return <div className="flex flex-col space-y-7 h-full">{children}</div>;
};

export default StatsLayout;