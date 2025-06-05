const HeroVisual = () => {
  return (
    <div className="relative">
      <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500 dark:bg-gray-800 dark:text-white dark:shadow-gray-600">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Customer Service Queue
            </h3>
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium dark:bg-green-800 dark:text-green-100">
              Active
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-xl text-center dark:bg-blue-900">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-200">
                12
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-200">
                In Queue
              </div>
            </div>
            <div className="bg-green-50 p-4 rounded-xl text-center dark:bg-green-900">
              <div className="text-2xl font-bold text-green-600 dark:text-green-200">
                8.5
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-200">
                Avg Wait (min)
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border-l-4 border-green-500 dark:bg-green-900">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 text-white rounded-lg flex items-center justify-center font-semibold text-sm dark:bg-green-600">
                  A1
                </div>
                <span className="font-medium text-gray-600 dark:text-gray-200">
                  Now Serving
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500 dark:bg-blue-900">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center font-semibold text-sm dark:bg-blue-600">
                  A2
                </div>
                <span className="font-medium text-gray-600 dark:text-gray-200">
                  Next Up
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg dark:bg-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-400 text-white rounded-lg flex items-center justify-center font-semibold text-sm dark:bg-gray-500">
                  A3
                </div>
                <span className="text-gray-600 dark:text-gray-200">Position 3</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl mx-auto flex items-center justify-center">
              <span className="text-xs text-gray-500">QR CODE</span>
            </div>
            <p className="text-sm text-gray-500 mt-2 dark:text-gray-200">Scan to join queue</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
