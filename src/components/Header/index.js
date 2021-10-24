import React from 'react';
import '../../App.css';

function Header() {
  return (

    <nav className="">
      <div className="flex justify-around h-40 px-10 shadow items-center navheader">
        <div className="flex items-center space-x-8">
          <h1 className="text-xl lg:text-2xl font-bold text-gray-700">Sophie Deskin</h1>
          <div className="hidden md:flex justify-end space-x-4">
            <a href="#" className="hover:text-indigo-600 text-gray-700">About Me</a>
            <a href="#" className="hover:text-indigo-600 text-gray-700">Portfolio</a>
            <a href="#" className="hover:text-indigo-600 text-gray-700">Contact</a>
            <a href="#" className="hover:text-indigo-600 text-gray-700">Resume</a>
          </div>
        </div>
    </div>
  </nav>
  
  );
}

export default Header;