import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

export default function navbar() {
  return (
    <>
      <nav>
        <header>Bookstore CMS</header>
        <ul>
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
