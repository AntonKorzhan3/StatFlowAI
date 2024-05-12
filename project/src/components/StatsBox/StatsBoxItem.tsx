import React from "react";
import { BoxItemTitles } from "@/constants/BoxItemConstants";

const StatsBoxItem = ({
  itemType,
  itemData,
  boxItemFunction,
}: {
  itemType: string;
  itemData: string | null;
  boxItemFunction: Function;
}) => {
  const title = BoxItemTitles[itemType];
  return (
    <div
      className="bg-[#504C46] font-semibold h-28 w-40 rounded-xl flex flex-col justify-center items-center bg-opacity-50 text-white cursor-pointer hover:bg-black"
      onClick={() => boxItemFunction({ statType: itemType, stat: itemData })}
    >
      <p>{title}:</p>
      <p className="data">{itemData}</p>
    </div>
  );
};

export default StatsBoxItem;
