import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import '../styles/book.css';

export default function Book() {
  const bookstore = useSelector((state) => state.books.bookstore);
  const dispatch = useDispatch();

  return (
    <div className="book-container">
      <header>books list</header>
      <ul>
        {bookstore.map((e, index) => (
          <li key={e.id}>
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
            <button type="button" onClick={() => { dispatch(removeBook(index)); }}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
