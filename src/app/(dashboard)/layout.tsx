import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import "../../utils/firebase";
import { ThemeProvider } from "../contexts/ThemeProvider";
import { AuthProvider, ProtectedRoutes } from "../contexts/AuthProvider";
import DashboardNav from "@/components/client/DashboardNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Queue Flow",
  description: "An open source queue management system",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <AuthProvider>
            <ProtectedRoutes>
              <DashboardNav>
                {children}

                {/* Footer */}
                <footer className="border-t border-gray-800 bg-gray-900 py-16 text-white">
                  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid justify-center gap-8 text-center md:grid-cols-4 md:text-start">
                      <div className="space-y-4">
                        <div className="text-2xl font-bold text-blue-400">
                          QueueFlow
                        </div>
                        <p className="text-gray-400">
                          The intelligent queue management platform that
                          transforms customer experiences.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold">Product</h4>
                        <div className="space-y-2 text-gray-400">
                          <div>Features</div>
                          <div>Pricing</div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold">Support</h4>
                        <div className="space-y-2 text-gray-400">
                          <div>Contact Us</div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold">Company</h4>
                        <div className="space-y-2 text-gray-400">
                          <div>About</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400">
                      <p>&copy; 2024 QueueFlow. All rights reserved.</p>
                    </div>
                  </div>
                </footer>
              </DashboardNav>
            </ProtectedRoutes>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
