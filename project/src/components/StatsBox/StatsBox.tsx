import { BoxInfo } from "@/types/BoxInfo";
import React, { ReactNode } from "react";
import StatsBoxItem from "./StatsBoxItem";

// TODO: Pass in field for bg
const StatsBox = ({
  title,
  info,
  boxItemFunction,
}: {
  title: String;
  info: BoxInfo;
  boxItemFunction: Function;
}) => {
  return (
    <div className="h-48 rounded-xl p-5">
      <p className="font-bold text-xl pb-3">{title}</p>
      <div className="flex space-x-10 pl-10">
        {Object.entries(info).map(([key, value], idx) => (
          <StatsBoxItem
            key={idx}
            itemType={key}
            itemData={value}
            boxItemFunction={boxItemFunction}
          />
        ))}
      </div>
    </div>
  );
};

export default StatsBox;
