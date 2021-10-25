import React from 'react';
import './header.css'
import '../../App.css';

function Header() {
  return (

    <nav className="">
          <h1 className="text-xl lg:text-4xl font-bold text-gray-700 flex justify-center pt-8">Sophie Deskin</h1>

      {/* <div className="flex justify-around h-20 shadow items-center">
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex justify-end space-x-4">
            <a href="#About" className="hover:text-indigo-600 text-gray-700">About Me</a>
            <a href="#" className="hover:text-indigo-600 text-gray-700">Portfolio</a>
            <a href="#" className="hover:text-indigo-600 text-gray-700">Contact</a>
            <a href="#" className="hover:text-indigo-600 text-gray-700">Resume</a>
          </div>
        </div>
    </div>
     */}
  </nav>
  
  );
}

export default Header;