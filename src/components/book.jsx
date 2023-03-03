import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletBooks, getBooks } from '../redux/books/booksSlice';
import '../styles/book.css';

export default function Book() {
  const bookstore = useSelector((state) => state.books.bookstore);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div className="book-container">
      <header>books list</header>
      <ul>
        {Object.keys(bookstore).map((itemId) => bookstore[itemId].map((e) => (
          <li key={itemId}>
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
            <button type="button" onClick={async () => { await dispatch(deletBooks(itemId)); dispatch(getBooks()); }}>delete</button>
            <br />
            {e.category}
          </li>
        )))}
      </ul>
    </div>
  );
}
