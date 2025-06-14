import Link from "next/link";
import React from "react";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Free",
      price: "Free forever",
      features: [
        "Up to 100 customers",
        "Up to 5 queues",
        "Basic analytics",
        "Community support",
      ],
      description: "Great for individuals and small projects.",
      cta: "Get Started",
    },
    {
      name: "Starter",
      price: "$29/month",
      features: [
        "Up to 1,000 customers",
        "Up to 15 queues",
        "Advanced analytics",
        "Email support",
      ],
      description: "Perfect for small businesses starting out.",
      cta: "Upgrade Now",
    },
    {
      name: "Professional",
      price: "$99/month",
      features: [
        "Up to 10,000 customers",
        "Unlimited queues",
        "Priority email support",
        "Custom branding",
      ],
      description: "Ideal for growing businesses with more complex needs.",
      cta: "Get Pro",
    },
    // {
    //   name: "Enterprise",
    //   price: "Contact us",
    //   features: [
    //     "Unlimited customers",
    //     "Full analytics suite",
    //     "Dedicated account manager",
    //     "Custom integrations",
    //   ],
    //   description: "Tailored solutions for large organizations.",
    // },
  ];
  return (
    <section
      id="pricing"
      className="bg-gradient-to-tr from-blue-50 to-purple-50 py-20 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Find a plan that works for you.
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            <span className="font-bold text-blue-600">QueueFlow</span> has
            scalable pricing to fit any business size, from startups to
            enterprises.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center space-y-8 space-x-0 px-3 xl:flex-row xl:space-y-0 xl:space-x-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className="w-full rounded-2xl bg-white p-8 shadow-lg lg:min-w-96 dark:bg-gray-800 dark:shadow-gray-700"
              >
                <div className="space-y-4 text-start">
                  <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-300">
                    {plan.name}
                  </h1>
                  <p className="text-gray-500 dark:text-gray-400">
                    {plan.description}
                  </p>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {plan.price}
                  </div>
                  <ul className="mt-4 space-y-2 border-t pt-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center space-x-2 text-gray-600 dark:text-gray-400"
                      >
                        <svg
                          className="h-5 w-5 text-blue-600 dark:text-blue-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M16.707 5.293a1 1 0 00-1.414-1.414l-7.586 7.586L4.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8z" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/signup">
                    <button className="mt-6 w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition duration-200 hover:cursor-pointer hover:bg-blue-700">
                      {plan.cta}
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
