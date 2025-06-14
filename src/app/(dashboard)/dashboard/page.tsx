import NewQueueButtonWithForm from "@/components/client/NewQueueButtonWithForm";
import OrgQueueCard from "@/components/client/OrgQueueCard";
import Pagination from "@/components/client/Pagination";
import SearchComponent from "@/components/client/SearchComponent";
import OrgQueueCardSkeleton from "@/components/skeleton/OrgQueueCardSkeleton";
import { Suspense } from "react";

const Dashboard = () => {
  return (
    <section className="min-h-screen bg-gray-100 p-6 dark:bg-gray-900">
      <div className="my-3 flex flex-col items-center justify-between">
        <NewQueueButtonWithForm />

        {/* Search bar */}
        <section className="mt-10 mb-3 w-full max-w-3xl">
          <SearchComponent placeholder="Search Queues..." />
        </section>

        <section className="mt-8 w-full max-w-7xl">
          <Suspense fallback={<OrgQueueCardSkeleton />}>
            <div className="grid gap-8 md:grid-cols-2 2xl:grid-cols-3">
              <OrgQueueCard />
              <OrgQueueCard />
              <OrgQueueCard />
              <OrgQueueCard />
            </div>
          </Suspense>
        </section>
      </div>

      {/* Pagination */}
      <div className="mt-20 mb-10 flex w-full items-center justify-center">
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
