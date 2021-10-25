import React from 'react'
import './footer.css'
export default function Footer() {
    return (

        <footer className="relative bg-blueGray-200 pt-12 pb-6">
        <div className="items-center justify-center align-center text-gray-700">
         
            <div className="w-full px-4">
              <div className="items-center justify-center footer">
              
              <button className="bg-white text-gray-700 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              <a href="https://stackoverflow.com/users/17236676/sophie-deskin" target="_blank"><i className="fab fa-stack-overflow"></i></a>
            </button>
            <button className="bg-white text-gray-700 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <a href="https://www.linkedin.com/in/sophie-deskin-0b275396/" target="_blank"><i className="fab fa-linkedin"></i></a>
            </button>
            <button className="bg-white text-gray-700 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <a href="https://github.com/sophiedeskin" target="_blank"><i className="fab fa-github"></i></a>
            </button>
               
              </div>
            </div>
         
        </div>
      </footer>

    )
}
