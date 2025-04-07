import SignoutButton from '@/app/_components/signoutButton';
import { auth } from '@/util/auth';
import React from 'react';

interface Props {}

async function Page(props: Props) {
  const session = await auth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <div className="bg-white max-w-sm w-full p-8 rounded-2xl shadow-lg text-center space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">Logout</h1>
        <p className="text-gray-600">
          You are currently signed in as{' '}
          <span className="font-semibold text-indigo-600">
            {session?.user?.email || 'a user'}
          </span>
          .
        </p>

        <SignoutButton session={session} />
      </div>
    </div>
  );
}

export default Page;
