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
      className="py-20 bg-gradient-to-tr from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Find a plan that works for you.
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            <span className="text-blue-600 font-bold">QueueFlow</span> has
            scalable pricing to fit any business size, from startups to
            enterprises.
          </p>

          <div className="flex flex-col items-center justify-center px-3 space-y-8 space-x-0 xl:space-y-0 xl:flex-row xl:space-x-8 mt-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg w-full lg:min-w-96 dark:bg-gray-800 dark:shadow-gray-700"
              >
                <div className="space-y-4 text-start">
                  <h1 className="text-gray-700 font-bold text-3xl dark:text-gray-300">
                    {plan.name}
                  </h1>
                  <p className="text-gray-500 dark:text-gray-400">
                    {plan.description}
                  </p>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {plan.price}
                  </div>
                  <ul className="space-y-2 mt-4 border-t pt-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center space-x-2 text-gray-600 dark:text-gray-400"
                      >
                        <svg
                          className="w-5 h-5 text-blue-600 dark:text-blue-400"
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
                    <button className="w-full mt-6 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:cursor-pointer hover:bg-blue-700 transition duration-200">
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
