import React, { useState } from "react";
import Header from "./components/Header/index.js"
import Footer from "./components/Footer/index.js"
import Contact from "./components/Contact/index.js"
import About from "./components/About/index.js"
import Resume from "./components/Resume/index.js"
import Nav from './components/Nav/index.js';
import Page from "./components/Page";
import './App.css';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <About />;

  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {renderPage()}
    </div>
  );
}





// function App() {

//   const [pages] = useState([
//     {
//       name: "about me"
//     },
//     { name: "portfolio" },
//     { name: "contact" },
//     {
//       name: "resume"
//     }
//   ]);

//   const [currentPage, setCurrentPage] = useState(pages[0]);

//   return (
// <div className="app">
// <Header>
// <Nav
//           pages={pages}
//           setCurrentPage={setCurrentPage}
//           currentPage={currentPage}
//         ></Nav>
// </Header>
// <main>
//         <Page currentPage={currentPage}></Page>
//       </main>
//       <Footer />
//     </div>

//   );
// }

// export default App;
