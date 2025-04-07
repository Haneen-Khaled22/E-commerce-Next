import React from 'react';
import Navigation from './Navigation';
import Logo from './logo';



interface Props {}

function Header(props: Props) {


    return (
        <header className="bg-gray-100 shadow-sm">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
              
                <Logo /> 
                <Navigation />
            </div>
        </header>
    );
}

export default Header;
