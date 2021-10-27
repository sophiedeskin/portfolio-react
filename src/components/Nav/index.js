import React from 'react';

function Nav({ currentPage, handlePageChange }) {
    return (
        <div className="flex justify-around h-20 items-center">
        <div className="flex items-center">
        <div className="md:flex justify-end space-x-4">
          <a 
            href="#about"
            onClick={() => handlePageChange('About')}
  
            className={currentPage === 'About'}className="hover:text-indigo-600 text-gray-700"
          >
            About
          </a>
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}className="hover:text-indigo-600 text-gray-700"
          >
            Porfolio
          </a>
          <a
            href="#resume"
  
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}className="hover:text-indigo-600 text-gray-700"
          >
            Resume
          </a>
          <a
            href="#contact"
  
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}className="hover:text-indigo-600 text-gray-700"
          >
            Contact
          </a>
      </div>
      </div>
      </div>
    );
  }
  
  export default Nav;
  
// function Nav(props) {
//     const {
//       pages = [],
//       setCurrentPage,
//       currentPage,
//     } = props;
  
//     useEffect(() => {
//       document.title = (currentPage.name);
//     }, [currentPage]);
  
//     return (    
//         <nav>
//           <ul className="flex-row">
//             {pages.map((Page) => (
//               <li
//                 className={`mx-5 ${
//                   currentPage.name === Page.name && 'navActive'
//                   }`}
//                 key={Page.name}
//               >
//                 <span
//                   onClick={() => setCurrentPage(Page)}
//                 >
//                   {Page.name}
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </nav>
//     );
//   }
  
//   export default Nav;