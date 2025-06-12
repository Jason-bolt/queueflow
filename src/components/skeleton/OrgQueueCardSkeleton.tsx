"use client";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useTheme } from "@/app/contexts/ThemeProvider";

const OrgQueueCardSkeleton = () => {
  const { theme } = useTheme();
  const skeletonBaseColor = theme === "dark" ? "#374151" : "#f3f4f6"; // Base color for skeleton
  const skeletonHighlightColor = theme === "dark" ? "#4b5563" : "#e5e7eb"; // Highlight color for skeleton

  const skeletonCount = 5; // Number of skeleton lines to display

  return (
    <SkeletonTheme
      baseColor={skeletonBaseColor}
      highlightColor={skeletonHighlightColor}
    >
      {/* Skeleton lines for loading state */}
      {Array.from({ length: skeletonCount }).map((_, index) => (
        <section
          key={index}
          className="grid md:grid-cols-2 2xl:grid-cols-3 gap-8"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg w-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 dark:bg-gray-800 dark:shadow-gray-800 dark:border dark:border-gray-700">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                <Skeleton
                  className="py-1 px-10 rounded"
                  // baseColor={skeletonBaseColor}
                  // highlightColor={skeletonHighlightColor}
                />
              </h3>
              <div className="flex items-center justify-between">
                <h3 className="text-gray-800 dark:text-gray-400">
                  Email Required:
                </h3>
                <Skeleton className="py-1 px-10 rounded" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-gray-800 dark:text-gray-400">Max Size:</h3>
                <Skeleton className="py-1 px-10 rounded" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-gray-800 dark:text-gray-400">Expires:</h3>
                <Skeleton className="py-1 px-10 rounded" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-gray-800 dark:text-gray-400">Current:</h3>
                <Skeleton className="py-1 px-10 rounded" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-gray-800 dark:text-gray-400">Status:</h3>
                <Skeleton className="py-1 px-10 rounded" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center my-5">
              <p className="text-gray-400 text-sm">Scan QR code below:</p>
              <Skeleton className="text-red-500 py-[70px] px-20 mt-3" />
            </div>

            <Skeleton className="mt-4 py-3 px-10 rounded bg-green-100" />
          </div>
        </section>
      ))}
    </SkeletonTheme>
  );
};

export default OrgQueueCardSkeleton;
