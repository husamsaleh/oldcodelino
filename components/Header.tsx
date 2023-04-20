// components/Header.tsx

import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-black py-4 px-6 text-neutral-200 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-bold">CodeLingo</h1>
        <nav>
          <ul className="flex space-x-10">
            <li>
              <Link href="/" className="text-lg">
                Home
              </Link>
            </li>
            {/* <li>
                
              <Link href="/dashboard" className="text-lg">
                Pricing
              </Link>
            </li> */}
            
           
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
