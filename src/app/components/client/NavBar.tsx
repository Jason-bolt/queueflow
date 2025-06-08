"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">
              <Link href="/">QueueFlow</Link>
            </div>
          </div>

          <div className="lg:hidden flex items-center space-x-4">
            <ThemeToggle />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
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
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105">
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
        <div className="lg:hidden bg-white border-t border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="px-4 py-2 space-y-4">
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
            <button className="block w-full bg-blue-600 text-white px-6 py-2 rounded-lg">
              Start Free Trial
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
