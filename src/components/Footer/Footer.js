import React from 'react';

function Footer({ currentPage, handlePageChange }) {
    return (
        <ul className="nav">
            <li className="nav-item">
                <a
                    href="#shows"
                    onClick={() => handlePageChange('Shows')}
                    className={currentPage === 'Shows' ? 'nav-link active' : 'nav-link'}
                >
                    Shows
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#shop"
                    onClick={() => handlePageChange('Shop')}
                    className={currentPage === 'Shop' ? 'nav-link active' : 'nav-link'}
                >
                    Shop
                </a>
            </li>
        </ul>
    );
}

export default Footer;
