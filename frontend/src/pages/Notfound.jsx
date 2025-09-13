import React from "react";
import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        Oops! The page you are looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
      >
        Go Home
      </Link>
    </div>
  );
}
