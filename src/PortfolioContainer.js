import React, { useState } from "react";
import Header from "./components/Header/index.js"
import Footer from "./components/Footer/index.js"
import Contact from "./components/Contact/index.js"
import About from "./components/About/index.js"
import Resume from "./components/Resume/index.js"
import Nav from './components/Nav/index.js';
import Project from "./components/Project";
import './App.css';
import Portfolio from "./components/Portfolio/index.js";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');


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
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <About />;

  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
    <div>
      <Header/>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
      <Footer/>
      </>
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
