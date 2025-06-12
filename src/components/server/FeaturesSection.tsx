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
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Everything you need to manage queues
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
            From QR code scanning to real-time analytics, QueueFlow provides all
            the tools your business needs to deliver exceptional customer
            experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 dark:bg-gray-800 dark:shadow-gray-800 dark:border dark:border-gray-700"
            >
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 rounded-xl w-fit dark:bg-blue-900">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed dark:text-gray-400">
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
