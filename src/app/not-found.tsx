import React from "react";
import Link from "next/link";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
      <p className="text-lg text-gray-500 mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="bg-gray-500 text-white px-6 py-3 text-lg font-medium rounded-full shadow-lg hover:bg-gray-800 transition-all"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
