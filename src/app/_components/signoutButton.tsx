'use client';

import { signout } from '@/util/actions';
import React from 'react';
// Optional icon
import { LogOut } from 'lucide-react';

function SignoutButton() {
  return (
    <form action={signout}>
      <button
        type="submit"
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-gray-800 to-red-600 
        hover:from-gray-800 hover:to-gray-800 text-white font-semibold py-2 px-5 rounded-2xl 
        shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
      >
        <LogOut size={18} />
        <span>Sign out</span>
      </button>
    </form>
  );
}

export default SignoutButton;
