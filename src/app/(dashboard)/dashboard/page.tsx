import OrgQueueCard from "@/components/client/OrgQueueCard";
import Pagination from "@/components/client/Pagination";
import SearchComponent from "@/components/client/SearchComponent";
import OrgQueueCardSkeleton from "@/components/skeleton/OrgQueueCardSkeleton";
import { Plus } from "lucide-react";
import { Suspense } from "react";

const Dashboard = () => {
  return (
    <section className="p-6 min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-between my-3">
        <div className="flex flex-col-reverse items-start w-full md:items-center md:space-y-0 md:flex-row md:justify-between">
          <div className="mt-4 md:mt-0">
            <h1 className="text-gray-800 text-3xl font-semibold dark:text-gray-300">
              Your Queues
            </h1>
            <p className="text-gray-500 text-sm">
              Manage and monitor all your business queues
            </p>
          </div>
          <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 hover:cursor-pointer">
            <Plus size={20} className="" />
            <span className="ml-2">Create New Queue</span>
          </button>
        </div>

        {/* Search bar */}
        <section className="mt-10 mb-3 w-full max-w-3xl">
          <SearchComponent placeholder="Search Queues..." />
        </section>

        <section className="mt-8 w-full max-w-7xl">
          <Suspense
            fallback={
              <OrgQueueCardSkeleton />
            }
          >
            <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-8">
              <OrgQueueCard />
              <OrgQueueCard />
              <OrgQueueCard />
              <OrgQueueCard />
            </div>
          </Suspense>
        </section>
      </div>

      {/* Pagination */}
      <div className="w-full flex justify-center items-center mt-20 mb-10">
        <Pagination totalCount={30} />
      </div>
    </section>
  );
};

export default Dashboard;
export const metadata = {
  title: "Dashboard",
  description: "Your dashboard for managing queues",
};
