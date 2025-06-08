"use client";
import { ProtectedRoutes, useAuth } from "@/app/contexts/AuthProvider";

const Dashboard = () => {
  const { signOutUser, user } = useAuth();
  console.log("User in Dashboard:", user);
  return <button onClick={signOutUser}>Logout</button>;
};

export default ProtectedRoutes(Dashboard);
