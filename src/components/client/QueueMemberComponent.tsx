"use client";

import { Check, Dot, X } from "lucide-react";

const QueueMemberComponent = () => {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-4 rounded-lg bg-white p-4 shadow-md md:flex-row dark:bg-gray-800">
      {/* Member details */}
      <div className="flex w-full flex-col items-center justify-center gap-3 md:w-fit md:flex-row md:gap-3">
        {/* Number */}
        <div className="w-full rounded-lg bg-blue-600 p-4 text-center text-xl font-semibold md:w-fit">
          A001
        </div>
        {/* Name and hash */}
        <div className="flex flex-col items-center justify-center md:items-start">
          <h1 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            John Doe
          </h1>
          <div className="flex flex-col items-center justify-center sm:flex-row">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Hash: <span>#1a2b3c4d</span>
            </p>
            <Dot className="dark:text-400 hidden text-gray-500 sm:inline-block" />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Joined: <span>2 mins ago</span>
            </p>
          </div>
        </div>
      </div>
      {/* Actions */}
      <div className="flex w-full flex-row gap-3 md:w-fit">
        <button className="flex w-full items-center justify-center rounded-lg bg-green-600 px-4 py-2 font-semibold text-white transition-colors duration-200 hover:cursor-pointer hover:bg-green-700 md:w-fit">
          <Check size={20} className="" />
          <span className="ml-2">Serve</span>
        </button>
        <button className="flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2 font-semibold text-white transition-colors duration-200 hover:cursor-pointer hover:bg-gray-900 md:w-fit dark:bg-gray-700 dark:hover:bg-gray-600">
          <X size={20} className="" />
          <span className="ml-2">Kick</span>
        </button>
      </div>
    </div>
  );
};

export default QueueMemberComponent;
