import React from 'react';
import Form from './form';
import '../styles/book.css';

export default function book() {
  return (
    <div className="book-container">
      <ul>
        <li>
          <span>Title by &quot;Author&quot;  </span>
          <button type="button">Delete</button>
        </li>
      </ul>
      <Form />
    </div>
  );
}
