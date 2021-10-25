import React from 'react';
import PageContent from '../PageContent/index.js';
import About from '../About/index.js';
import Portfolio from '../Portfolio/index.js';
import Contact from '../Contact/index.js';
import Resume from '../Resume/index.js';

function Page({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case 'About Me':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <section>
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}
export default Page;