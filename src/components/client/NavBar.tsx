"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">
              <Link href="/">QueueFlow</Link>
            </div>
          </div>

          <div className="flex items-center space-x-4 lg:hidden">
            <ThemeToggle />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 lg:flex">
            <Link href="/#features" className="navbar_text">
              Features
            </Link>
            <Link href="/#how-it-works" className="navbar_text">
              How It Works
            </Link>
            <Link href="/#testimonials" className="navbar_text">
              Testimonials
            </Link>
            <Link href="/#pricing" className="navbar_text">
              Pricing
            </Link>
            <Link href="/signin" className="navbar_text">
              Sign In
            </Link>
            <button className="transform rounded-lg bg-blue-600 px-6 py-2 text-white transition-all hover:scale-105 hover:bg-blue-700">
              Start Free Trial
            </button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="navbar_menu_icon" />
            ) : (
              <Menu className="navbar_menu_icon" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden dark:border-gray-700 dark:bg-gray-800">
          <div className="space-y-4 px-4 py-2">
            <Link
              href="/#features"
              className="navbar_text_mobile"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/#how-it-works"
              className="navbar_text_mobile"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/#testimonials"
              className="navbar_text_mobile"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="/#pricing"
              className="navbar_text_mobile"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/signin"
              className="navbar_text_mobile"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>
            <button className="block w-full rounded-lg bg-blue-600 px-6 py-2 text-white">
              Start Free Trial
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
