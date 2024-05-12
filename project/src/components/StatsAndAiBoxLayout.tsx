import { Props } from "@/types/Props";
import React from "react";

const StatsAndAiBoxLayout = ({ children }: Props) => {
  return <div className="flex-1 space-x-8 flex m-8">{children}</div>;
};

export default StatsAndAiBoxLayout;