import React from "react";
import {
  Users,
  Clock,
  Shield,
  BarChart3,
  Smartphone,
  Mail,
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Smartphone className="features_icon_style" />,
      title: "QR Code Integration",
      description:
        "Customers join queues instantly by scanning QR codes - no app downloads required.",
    },
    {
      icon: <Mail className="features_icon_style" />,
      title: "Smart Notifications",
      description:
        "Email verification and real-time updates keep customers informed about their queue status.",
    },
    {
      icon: <BarChart3 className="features_icon_style" />,
      title: "Live Analytics",
      description:
        "Track queue performance, wait times, and customer flow with detailed insights.",
    },
    {
      icon: <Shield className="features_icon_style" />,
      title: "Secure & Private",
      description:
        "Anonymous options available with secure hash-based identification for privacy protection.",
    },
    {
      icon: <Clock className="features_icon_style" />,
      title: "Flexible Management",
      description:
        "Set queue limits, expiration times, and serve customers efficiently with one-click actions.",
    },
    {
      icon: <Users className="features_icon_style" />,
      title: "Multi-Queue Support",
      description:
        "Manage multiple service lines simultaneously with customizable settings for each queue.",
    },
  ];

  return (
    <section id="features" className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Everything you need to manage queues
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
            From QR code scanning to real-time analytics, QueueFlow provides all
            the tools your business needs to deliver exceptional customer
            experiences.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="transform rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border dark:border-gray-700 dark:bg-gray-800 dark:shadow-gray-800"
            >
              <div className="space-y-4">
                <div className="w-fit rounded-xl bg-blue-50 p-3 dark:bg-blue-900">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
