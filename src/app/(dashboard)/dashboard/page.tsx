import NewQueueButtonWithForm from "@/components/client/NewQueueButtonWithForm";
import OrgQueueCard from "@/components/client/OrgQueueCard";
import Pagination from "@/components/client/Pagination";
import SearchComponent from "@/components/client/SearchComponent";
import OrgQueueCardSkeleton from "@/components/skeleton/OrgQueueCardSkeleton";
import { Suspense } from "react";

const Dashboard = () => {
  return (
    <section className="p-6 min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-between my-3">
        <NewQueueButtonWithForm />

        {/* Search bar */}
        <section className="mt-10 mb-3 w-full max-w-3xl">
          <SearchComponent placeholder="Search Queues..." />
        </section>

        <section className="mt-8 w-full max-w-7xl">
          <Suspense fallback={<OrgQueueCardSkeleton />}>
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
