import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import humanLogo from '../Assets/icons/humanLogo.png';

export default function navbar() {
  return (
    <>
      <nav>
        <div className="header-li-container">
          <header className="bookstore-CMS">Bookstore CMS</header>
          <ul>
            <li>
              <Link to="/" style={{ color: 'black' }}>Books</Link>
            </li>
            <li className="categories">
              <Link to="/categories" style={{ color: 'black' }}>Categories</Link>
            </li>
          </ul>
        </div>
        <div className="humanLogo-div">
          <img src={humanLogo} alt="human-logo" />
        </div>
      </nav>
    </>
  );
}
