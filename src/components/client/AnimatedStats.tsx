"use client";
import React, { useEffect, useState } from "react";
import { Users, Clock, Shield, BarChart3 } from "lucide-react";

const AnimatedStats = () => {
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    {
      number: "50K+",
      label: "Businesses Served",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "2M+",
      label: "Queue Entries",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      number: "85%",
      label: "Reduction in Wait Times",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      number: "99.9%",
      label: "Uptime Guarantee",
      icon: <Shield className="w-6 h-6" />,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-blue-600 rounded-xl">
          {stats[currentStat].icon}
        </div>
        <div>
          <div className="text-3xl font-bold text-gray-900 dark:text-white">
            {stats[currentStat].number}
          </div>
          <div className="text-gray-600 dark:text-gray-400">
            {stats[currentStat].label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedStats;
