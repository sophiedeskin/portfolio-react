import React from "react";
import PortfolioContainer from "./PortfolioContainer";
import Header from "./components/Header/index.js"
import Footer from "./components/Footer/index.js"
import Nav from './components/Nav/index.js';


const App = () => 
{
return (
    <div>
      <Header>
        <Nav
        //   pages={pages}
        //   setCurrentPage={setCurrentPage}
        //   currentPage={currentPage}
        ></Nav>
      </Header>
      <main>
        <PortfolioContainer/>
      </main>
      <Footer />
    </div>
  );
}

export default App;


