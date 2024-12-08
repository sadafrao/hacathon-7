import React from "react";
import { FiSearch, FiSettings } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineBell } from "react-icons/ai";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white border-b border-gray-200 shadow-md max-w-screen-xl mx-auto">
      {/* Left Section */}
      <div className="flex items-center gap-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-500">MORENT</h1>

        {/* Search Bar */}
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search something here"
            className="w-[492px] h-[44px] pl-4 pr-10 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Search input"
          />
          <button
            className="absolute right-3 text-blue-500"
            aria-label="Open search settings"
          >
            <FiSettings size={18} />
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        <button aria-label="Favorites">
          <AiOutlineHeart className="text-gray-600 cursor-pointer" size={24} />
        </button>
        <div className="relative cursor-pointer">
          <button aria-label="Notifications">
            <AiOutlineBell className="text-gray-600" size={24} />
          </button>
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
        </div>
        <div
          className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center"
          aria-label="Profile placeholder"
        >
          {/* Placeholder for Profile */}
          <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
