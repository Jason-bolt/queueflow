"use client";
import { ProtectedRoutes } from "@/app/contexts/AuthProvider";

const Dashboard = () => {
  return (
    <div>
      Dashboard
    </div>
  );
};

export default ProtectedRoutes(Dashboard);
