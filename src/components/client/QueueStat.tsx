"use client";

interface QueueStatProps {
  count: number;
  statName: string;
}

const QueueStat = ({ count, statName }: QueueStatProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 rounded-lg bg-white p-8 shadow-md dark:bg-gray-700">
      <h2 className="text-5xl font-bold text-gray-700 dark:text-gray-100">
        {count}
      </h2>
      <p className="text-gray-500 dark:text-gray-400">{statName}</p>
    </div>
  );
};

export default QueueStat;
