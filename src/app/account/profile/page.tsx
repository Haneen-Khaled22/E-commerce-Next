'use client';
import React from 'react';
import { UserRound } from 'lucide-react'; // Optional: for a user icon

interface Props {}

function Page(props: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl space-y-6">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-indigo-100 flex items-center justify-center">
            <UserRound size={32} className="text-indigo-600" />
          </div>
          <h1 className="text-2xl font-bold mt-4 text-gray-800">Update Account</h1>
        </div>

        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="john@example.com"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-xl font-semibold transition duration-300"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
