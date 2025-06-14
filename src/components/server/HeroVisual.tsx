const HeroVisual = () => {
  return (
    <div className="relative">
      <div className="rotate-2 transform rounded-3xl bg-white p-8 shadow-2xl transition-transform duration-500 hover:rotate-0 dark:bg-gray-800 dark:text-white dark:shadow-gray-600">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Customer Service Queue
            </h3>
            <div className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 dark:bg-green-800 dark:text-green-100">
              Active
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-blue-50 p-4 text-center dark:bg-blue-900">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-200">
                12
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-200">
                In Queue
              </div>
            </div>
            <div className="rounded-xl bg-green-50 p-4 text-center dark:bg-green-900">
              <div className="text-2xl font-bold text-green-600 dark:text-green-200">
                8.5
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-200">
                Avg Wait (min)
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-lg border-l-4 border-green-500 bg-green-50 p-3 dark:bg-green-900">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500 text-sm font-semibold text-white dark:bg-green-600">
                  A1
                </div>
                <span className="font-medium text-gray-600 dark:text-gray-200">
                  Now Serving
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-lg border-l-4 border-blue-500 bg-blue-50 p-3 dark:bg-blue-900">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500 text-sm font-semibold text-white dark:bg-blue-600">
                  A2
                </div>
                <span className="font-medium text-gray-600 dark:text-gray-200">
                  Next Up
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3 dark:bg-gray-700">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-400 text-sm font-semibold text-white dark:bg-gray-500">
                  A3
                </div>
                <span className="text-gray-600 dark:text-gray-200">
                  Position 3
                </span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-100">
              <span className="text-xs text-gray-500">QR CODE</span>
            </div>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-200">
              Scan to join queue
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
