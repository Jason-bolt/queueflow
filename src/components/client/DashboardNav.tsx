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
import { usePathname } from "next/navigation";

const DashboardNav = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const { signOutUser } = useAuth();
  const pathname = usePathname();

  const [pageTitle, setPageTitle] = useState("Dashboard");

  useEffect(() => {
    // Set the page title based on the current route
    const handleRouteChange = () => {
      const path = pathname;
      switch (path) {
        case "/dashboard":
          setPageTitle("Dashboard");
          break;
        case "/profile":
          setPageTitle("Profile");
          break;
        case "/user_management":
          setPageTitle("User Management");
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
  }, [pathname]);

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
        { icon: Users, label: "User Management", href: "/user_management" },
      ],
    },
  ];

  return (
    <>
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
        <div
          className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-white shadow-lg ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out lg:static lg:inset-0 lg:translate-x-0 dark:bg-gray-800`}
        >
          {/* Sidebar Header */}
          <div className="flex h-16 items-center justify-between border-b px-4 dark:border-gray-700">
            <h1 className="text-xl font-bold text-blue-600">QueueFlow</h1>
            <button
              onClick={toggleSidebar}
              className="rounded-md p-2 hover:bg-gray-100 lg:hidden dark:hover:bg-gray-700"
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
                    <p className="border-b border-gray-300 px-4 py-3 text-sm font-medium text-gray-400 dark:border-gray-700 dark:text-gray-500">
                      {item.section}
                    </p>
                  )}
                  {item.items.map(
                    (subItem, subIndex) =>
                      subItem && (
                        <li key={subIndex}>
                          <Link
                            href={subItem.href}
                            className={`navbar_text flex items-center rounded-lg px-4 py-3 transition-colors hover:bg-blue-50 dark:hover:bg-gray-700 ${subItem.label === pageTitle ? "bg-blue-100 dark:bg-gray-700" : ""}`}
                            onClick={() => {
                              setIsOpen(false);
                              setIsProfileOpen(false);
                            }}
                          >
                            <subItem.icon size={20} className="mr-3" />
                            {subItem.label}
                          </Link>
                        </li>
                      ),
                  )}
                </div>
              ))}
            </ul>
          </nav>
        </div>

        {/* Overlay for mobile */}
        {isOpen && (
          <div
            className="fixed inset-0 z-40 bg-black opacity-50 lg:hidden dark:bg-gray-800"
            onClick={toggleSidebar}
          />
        )}

        {/* Main Content */}
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Top Header */}
          <header className="flex h-16 items-center justify-between border-b bg-white px-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center">
              <button
                onClick={toggleSidebar}
                className="mr-4 rounded-md p-2 text-gray-700 hover:bg-gray-100 lg:hidden dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <Menu size={20} />
              </button>
              <h2 className="text-lg font-bold text-gray-700 dark:text-gray-300">
                {pageTitle}
              </h2>
            </div>

            <div className="flex items-center space-x-4">
              {/* Notification bell */}
              <button className="rounded-lg p-2 transition-colors hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
                <Bell size={20} className="text-gray-500 dark:text-gray-400" />
              </button>
              {/* Profile Dropdown */}
              <div className="relative" ref={profileRef}>
                <button
                  onClick={toggleProfile}
                  className="flex items-center space-x-2 rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-medium text-white">
                    JD
                  </div>
                  <span className="hidden text-sm font-medium text-gray-700 sm:block dark:text-gray-300">
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
                  <div className="absolute right-0 z-50 mt-2 w-48 rounded-lg border bg-white py-1 shadow-lg dark:border-gray-700 dark:bg-gray-800">
                    <Link
                      href="/profile"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      <User size={16} className="mr-3" />
                      Profile
                    </Link>
                    <Link
                      href="/profile"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      <Settings size={16} className="mr-3" />
                      Settings
                    </Link>
                    <hr className="my-1 text-gray-300 dark:text-gray-700" />
                    <button
                      onClick={() => {
                        setIsProfileOpen(false);
                        signOutUser();
                      }}
                      className="flex w-full items-center px-4 py-2 text-sm text-red-600 transition-colors hover:cursor-pointer hover:bg-red-50 dark:text-red-400 dark:hover:bg-gray-900"
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
