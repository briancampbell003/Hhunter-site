import React from 'react';
import Logo from '../../assets/hunter-logo.png';


function Header({ currentPage, handlePageChange }) {
  return (
    <div>

      <div className="header">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
        >
          <img className="logo" src={Logo} alt="MHL logo" width="250" height="60"></img>
        </a>
        <div className="define-hunter">
          <strong>hhunter:</strong> dj and producer
        </div>
      </div>
    </div>
  );
}

export default Header;
