"use client";
import React, { useEffect, useState } from "react";
import { Users, Clock, Shield, BarChart3 } from "lucide-react";

const AnimatedStats = () => {
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    {
      number: "50K+",
      label: "Businesses Served",
      icon: <Users className="h-6 w-6" />,
    },
    {
      number: "2M+",
      label: "Queue Entries",
      icon: <Clock className="h-6 w-6" />,
    },
    {
      number: "85%",
      label: "Reduction in Wait Times",
      icon: <BarChart3 className="h-6 w-6" />,
    },
    {
      number: "99.9%",
      label: "Uptime Guarantee",
      icon: <Shield className="h-6 w-6" />,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center gap-4">
        <div className="rounded-xl bg-blue-600 p-3">
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
