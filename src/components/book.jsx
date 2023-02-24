import React from 'react';
import '../styles/book.css';

export default function book({ array }) {
  return (
    <div className="book-container">
      <header>books list</header>
      <ul>
        {array.map((e, index) => (
          <li key="li" className={index}>
            <span>
              {e.title}
              {' '}
              by
            </span>
            <span>
              {' '}
              {e.author}
              {' '}
            </span>
            <button type="button">delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
