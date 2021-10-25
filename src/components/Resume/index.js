import React from 'react'
import resume from '../../assets/Sophie Deskin Resume.pdf';

export default function Resume() {
    return (
        <a className="" target="_blank" href={resume}>
          <button type="button" href={resume} className='flex max-w-sm bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none text-white text-2xl uppercase font-bold shadow-md rounded-full mx-auto p-5 justify-content:end'>
          <div className="flex sm:flex-cols-12 gap-2">
              <div className="col-span-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                  </svg>
              </div>
              <div className="col-span-2 pt-2">Resume Download</div>
          </div>    
      </button>
      </a>
    )
}
