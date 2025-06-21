"use client";

import { QrCode } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const ViewQrCode = () => {
  const [showQrCode, setShowQrCode] = useState(false);

  const toggleQrCode = () => {
    setShowQrCode((prev) => !prev);
  };

  return (
    <>
      <button
        className="flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition-colors duration-200 hover:cursor-pointer hover:bg-blue-700"
        onClick={toggleQrCode}
      >
        <QrCode />
        <span className="ml-2 text-sm">View QR Code</span>
      </button>

      {/* Get black div in the middle of the screen */}
      {showQrCode && (
        <section onClick={toggleQrCode} className="fixed inset-0 z-50">
          <div className="fixed inset-0 bg-gray-800 opacity-50 dark:bg-gray-600"></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="flex flex-col items-center rounded-lg bg-white px-16 py-10 shadow-lg dark:bg-gray-800">
              <h2 className="mb-1 text-lg font-semibold text-gray-700 dark:text-gray-200">
                QR Code
              </h2>
              <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
                Scan this QR code to join the queue.
              </p>
              {/* Placeholder for QR code, replace with actual QR code component */}
              <Image
                src="/default_qr_code.png"
                alt="Queue Placeholder"
                width={500}
                height={500}
                className="mt-2 h-40 w-40 rounded-lg border border-gray-300 shadow-lg dark:border-gray-700"
              />

              <p className="mt-6 text-xs text-gray-600 dark:text-gray-400">
                Click anywhere to close this view.
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ViewQrCode;
