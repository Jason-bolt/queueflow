const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Create Your Queues",
      description:
        "Set up multiple queues with custom settings, capacity limits, and notification preferences.",
    },
    {
      number: 2,
      title: "Customers Join Virtually",
      description:
        "Customers scan QR codes or use links to join queues remotely, with optional email verification.",
    },
    {
      number: 3,
      title: "Serve Efficiently",
      description:
        "Manage queues in real-time, serve customers with one click, and track performance analytics.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-white py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            How QueueFlow Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Simple setup, powerful results
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="space-y-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-2xl font-bold text-white">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
