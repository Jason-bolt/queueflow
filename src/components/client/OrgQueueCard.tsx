import Image from "next/image";
import Link from "next/link";

const OrgQueueCard = () => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg w-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 dark:bg-gray-800 dark:shadow-gray-800 dark:border dark:border-gray-700">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          First Queue
        </h3>
        <div className="flex items-center justify-between">
          <h3 className="text-gray-800 dark:text-gray-400">Email Required:</h3>
          <span className="text-sm text-gray-500">Yes</span>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-gray-800 dark:text-gray-400">Max Size:</h3>
          <span className="text-sm text-gray-500">50 people</span>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-gray-800 dark:text-gray-400">Expires:</h3>
          <span className="text-sm text-gray-500">6 hours</span>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-gray-800 dark:text-gray-400">Current:</h3>
          <span className="text-sm text-gray-500">13 people</span>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-gray-800 dark:text-gray-400">Status:</h3>
          <span className="text-sm text-green-500">Active</span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center my-5">
        <p className="text-gray-400 text-sm">Scan QR code below:</p>
        <Image
          src="/default_qr_code.png"
          alt="Queue Placeholder"
          width={500}
          height={500}
          className="rounded-lg h-40 w-40 mt-2 border border-gray-300 dark:border-gray-700 shadow-lg"
        />
      </div>

      <Link href={`/dashboard/queue/${"first-queue-id"}`} className="w-full">
        <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors duration-200 hover:cursor-pointer">
          Manage Queue
        </button>
      </Link>
    </div>
  );
};

export default OrgQueueCard;
