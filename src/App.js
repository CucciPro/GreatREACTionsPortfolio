import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {

  const [currentPage, handlePageChange] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'About Me':
        return <About />;
      case 'Contact':
        return <ContactForm />;
      case 'Resume':
        return <Resume />;
      case 'Portfolio':
        return <Gallery currentCategory={currentCategory} />;     
      default:
        return <About />;
    }
  };


  const [categories] = useState([
    {
      name: '',
      description: 'Examples of my previous work',
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>

      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <></>
      <div>{renderPage(currentPage)}
      </div>
          <Footer></Footer>
    </div>
  );
}

export default App;
