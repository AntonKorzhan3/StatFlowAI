import React from "react";
import { FaBars } from "react-icons/fa";

interface SidebarToggleProps {
  toggleSidebar: () => void; // Define the type of toggleSidebar prop
}

const SidebarToggle: React.FC<SidebarToggleProps> = ({ toggleSidebar }) => {
  return (
    <button onClick={toggleSidebar} className="text-white">
      <FaBars className="text-white text-2xl" />
    </button>
  );
};

export default SidebarToggle;
