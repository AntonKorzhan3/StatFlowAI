import React from "react";
import { FaBars } from "react-icons/fa";

interface TitleProps {
  toggleSidebar: () => void;
}

const Title: React.FC<TitleProps> = ({ toggleSidebar }) => {
  return (
    <div className="flex-none h-14 bg-[#2B2828] flex justify-center items-center">
      <h1 className="font-bold text-3xl">StatFlowAI</h1>
      <button onClick={toggleSidebar}>
        <FaBars className="text-white text-2xl" />
      </button>
    </div>
  );
};

export default Title;
