import Image from 'next/image';
import React from 'react';
import logo from '../../../public/logo-removebg-preview (1).png';

function Logo() {
    return (
        <div className="flex items-center justify-center space-x-3">
            <Image src={logo} alt="logo" width={60} height={60} />
            <h2 className="font-bold text-xl sm:text-xl text-gray-700">Recipe 4 U</h2>
        </div>
    );
}

export default Logo;
