"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  Home,
  User,
  Settings,
  LogOut,
  ChevronDown,
  Users,
  Bell,
} from "lucide-react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useAuth } from "@/app/contexts/AuthProvider";

const DashboardNav = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [pageTitle, setPageTitle] = useState("Dashboard");
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const { signOutUser } = useAuth();

  useEffect(() => {
    // Set the page title based on the current route
    const handleRouteChange = () => {
      const path = window.location.pathname;
      switch (path) {
        case "/dashboard":
          setPageTitle("Dashboard");
          break;
        case "/profile":
          setPageTitle("Profile");
          break;
        case "/documents":
          setPageTitle("Documents");
          break;
        case "/messages":
          setPageTitle("Messages");
          break;
        case "/settings":
          setPageTitle("Settings");
          break;
        default:
          setPageTitle("Dashboard");
      }
    };

    handleRouteChange();
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  // Close profile dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        profileRef.current &&
        event.target instanceof Node &&
        !profileRef.current.contains(event.target)
      ) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const newMenuItems = [
    {
      section: "",
      items: [{ icon: Home, label: "Dashboard", href: "/dashboard" }],
    },
    {
      section: "Settings",
      items: [
        ,
        { icon: Users, label: "User Management", href: "/user-management" },
      ],
    },
  ];

  return (
    <>
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
        <div
          className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 dark:bg-gray-800`}
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between h-16 px-4 border-b dark:border-gray-700">
            <h1 className="text-xl font-bold text-blue-600">QueueFlow</h1>
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md lg:hidden hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <X size={20} className="text-gray-700 dark:text-gray-300" />
            </button>
          </div>

          {/* Navigation Menu */}
          <nav className="mt-5">
            <ul className="space-y-2 px-4">
              {newMenuItems.map((item, index) => (
                <div key={index}>
                  {item.section && (
                    <p className="px-4 py-3 border-b border-gray-300 text-gray-400 text-sm font-medium dark:text-gray-500 dark:border-gray-700">
                      {item.section}
                    </p>
                  )}
                  {item.items.map(
                    (subItem, subIndex) =>
                      subItem && (
                        <li key={subIndex}>
                          <Link
                            href={subItem.href}
                            className="flex items-center px-4 py-3 rounded-lg navbar_text hover:bg-blue-50 transition-colors dark:hover:bg-gray-700"
                          >
                            <subItem.icon size={20} className="mr-3" />
                            {subItem.label}
                          </Link>
                        </li>
                      )
                  )}
                </div>
              ))}
            </ul>
          </nav>
        </div>

        {/* Overlay for mobile */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden dark:bg-gray-800"
            onClick={toggleSidebar}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Header */}
          <header className="bg-white shadow-sm border-b h-16 flex justify-between items-center px-4 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center">
              <button
                onClick={toggleSidebar}
                className="p-2 rounded-md text-gray-700 lg:hidden hover:bg-gray-100 mr-4 dark:hover:bg-gray-700 dark:text-gray-300"
              >
                <Menu size={20} />
              </button>
              <h2 className="text-lg font-bold text-gray-700 dark:text-gray-300">
                {pageTitle}
              </h2>
            </div>

            <div className="flex items-center space-x-4">
              {/* Notification bell */}
              <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors dark:hover:bg-gray-700 hover:cursor-pointer">
                <Bell size={20} className="text-gray-500 dark:text-gray-400" />
              </button>
              {/* Profile Dropdown */}
              <div className="relative" ref={profileRef}>
                <button
                  onClick={toggleProfile}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors dark:hover:bg-gray-700"
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    JD
                  </div>
                  <span className="hidden sm:block text-sm font-medium text-gray-700 dark:text-gray-300">
                    John Doe
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-gray-500 transition-transform dark:text-gray-400 ${
                      isProfileOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-1 z-50">
                    <Link
                      href="/profile"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      <User size={16} className="mr-3" />
                      Profile
                    </Link>
                    <Link
                      href="/profile"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      <Settings size={16} className="mr-3" />
                      Settings
                    </Link>
                    <hr className="my-1" />
                    <button
                      onClick={() => {
                        setIsProfileOpen(false);
                        signOutUser();
                      }}
                      className="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 hover:cursor-pointer transition-colors"
                    >
                      <LogOut size={16} className="mr-3" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
              <ThemeToggle />
            </div>
          </header>

          {/* Main Content Area */}
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardNav;
