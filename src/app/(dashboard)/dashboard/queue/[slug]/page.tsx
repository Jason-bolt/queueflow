import Pagination from "@/components/client/Pagination";
import QueueMemberComponent from "@/components/client/QueueMemberComponent";
import QueueStat from "@/components/client/QueueStat";
import ToggleButton from "@/components/client/ToggleButton";
import ViewQrCode from "@/components/client/ViewQrCode";
import { SquareChartGantt } from "lucide-react";
import React from "react";

const ManageQueue = () => {
  return (
    <section className="min-h-screen bg-gray-100 p-6 dark:bg-gray-900">
      <div className="my-3 flex flex-col items-center justify-between md:flex-row">
        <div className="flex flex-col items-center justify-center gap-1 text-2xl md:items-start">
          <h1 className="font-bold text-gray-900 dark:text-white">
            Queue Title
          </h1>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-500">
              Queue Status:
            </span>
            <ToggleButton />
          </div>
        </div>
        <div className="mt-4 flex items-center justify-center gap-4 md:mt-0">
          <button className="flex items-center justify-center rounded-lg border-1 border-gray-400 bg-gray-200 px-5 py-3 font-semibold text-gray-600 transition-colors duration-200 hover:cursor-pointer hover:bg-gray-300">
            <SquareChartGantt />
            <span className="ml-2 text-sm">Export CSV</span>
          </button>
          <ViewQrCode />
          
        </div>
        {/* Additional management features can be added here */}
      </div>

      {/* Queue Stats */}
      <div className="mt-7 grid gap-8 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
        <QueueStat count={120} statName="Total customers" />
        <QueueStat count={30} statName="Total served (today)" />
        <QueueStat count={123.5} statName="Avg. waiting time (mins)" />
        <QueueStat count={50} statName="Max capicity" />
        <QueueStat count={200} statName="Total served (lifetime)" />
      </div>

      {/* Queue Memebers */}
      <section className="my-10 w-full max-w-7xl">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Queue Members
        </h2>
        <div className="flex flex-col gap-4">
          {/* Placeholder for queue members, replace with actual data */}
          <QueueMemberComponent />
          <QueueMemberComponent />
          <QueueMemberComponent />
        </div>
      </section>

      {/* Pagination */}
      <div className="mt-20 mb-10 flex w-full items-center justify-center">
        <Pagination totalCount={30} />
      </div>
    </section>
  );
};

export default ManageQueue;
