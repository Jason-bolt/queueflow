"use client";
import { useState } from "react";

const ToggleButton = () => {
  const [isActive, setIsActive] = useState(true);

  const toggleStatus = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="flex items-center gap-2">
      {/* Toggle Button */}
      <button
        onClick={toggleStatus}
        className={`relative inline-flex h-5 w-10 items-center rounded-full transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-offset-2 focus:outline-none ${
          isActive
            ? "bg-blue-500 focus:ring-blue-500"
            : "bg-gray-300 focus:ring-gray-400 dark:bg-gray-700 dark:focus:ring-gray-600"
        }`}
      >
        {/* Sliding Circle */}
        <span
          className={`inline-block h-3 w-3 transform rounded-full bg-white shadow-lg transition-transform duration-200 ease-in-out ${
            isActive ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>

      {/* Status Text */}
      <span
        className={`text-sm font-medium ${
          isActive ? "text-green-500" : "text-gray-800 dark:text-gray-300"
        }`}
      >
        {isActive ? "Active" : "Inactive"}
      </span>
    </div>
  );
};

export default ToggleButton;
