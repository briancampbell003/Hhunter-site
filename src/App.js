import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home';
import Shows from './components/pages/Shows';
import Shop from './components/pages/Shop';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  // Determine page to render passed on the value of currentPage
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Shows') {
      return <Shows />;
    }
    if (currentPage === 'Shop') {
      return <Shop />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);


  return (
    <div className="page-frame">
      < Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      < Footer currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}
