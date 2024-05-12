import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white z-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <button className="absolute top-4 left-4" onClick={toggleSidebar}>
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      {/* Sidebar content */}
    </div>
  );
};

export default Sidebar;
