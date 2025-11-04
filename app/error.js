"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-red-600 mb-4">Oops!</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Something went wrong
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            We're sorry, but something unexpected happened. Please try again or
            contact us if the problem persists.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => reset()}
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
          >
            Try Again
          </button>

          <div className="flex justify-center space-x-4">
            <a
              href="/"
              className="text-red-600 hover:text-red-800 font-medium transition-colors duration-300"
            >
              Go Home
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="/contact"
              className="text-red-600 hover:text-red-800 font-medium transition-colors duration-300"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
