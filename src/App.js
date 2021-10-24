import React from 'react';
import Header from "./components/Header/index.js"
import About from "./components/About/index.js"
import Footer from "./components/Footer/index.js"
import Project from "./components/Project/index.js"
import './App.css';

function App() {
  return (
<div className="app">
<Header/>
<div className="sections">
<About/>
</div>
<div className="sections2">
<Project/>
</div>
<div className="footer">
<Footer/>
</div>
</div>  
  );
}

export default App;
