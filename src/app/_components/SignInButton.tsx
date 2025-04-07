'use client';
import { login } from '@/util/actions';
import Image from 'next/image';
import React from 'react';

interface Props {}

function SignInButton(props: Props) {
  return (
    <form action={login} className="w-full flex justify-center">
      <button
        className="flex items-center justify-center gap-4 w-full sm:w-72 md:w-80 lg:w-96
          bg-white border border-gray-300 rounded-2xl px-6 py-3 shadow-md
          hover:bg-gray-100 transition duration-300 ease-in-out"
      >
        <Image
          src="/gooogle.png"
          alt="Google Icon"
          width={24}
          height={24}
        />
        <span className="font-medium text-gray-700">Sign in with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
