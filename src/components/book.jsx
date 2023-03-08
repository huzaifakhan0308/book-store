import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletBooks, getBooks } from '../redux/books/booksSlice';
import '../styles/book.css';
import CircleProgressBar from './CircleProgressBar';

export default function Book() {
  const bookstore = useSelector((state) => state.books.bookstore);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const percent = 70;

  return (
    <div className="book-container">
      <ul>
        {Object.keys(bookstore).map((itemId) => bookstore[itemId].map((e) => (
          <li key={itemId}>
            <div className="title-author-side-container">
              <h4 className="category">
                {e.category}
              </h4>
              <h4 className="title">
                {e.title}
              </h4>
              <h4 className="author">
                {e.author}
              </h4>
              <div className="btn-container">
                <button type="button" className="comments">Comments</button>
                <button type="button" className="remove" onClick={async () => { await dispatch(deletBooks(itemId)); dispatch(getBooks()); }}>Remove</button>
                <button type="button" className="edit">Edit</button>
              </div>
            </div>
            <div>
              <CircleProgressBar percent={percent} />
            </div>
            <div className="update-progress-side-container">
              <span>CURRENT CHAPTER</span>
              <h4>
                CHAPTER3:&quot;A Lesson Learned&quot;
              </h4>
              <button type="button" className="update-progress">Update progress</button>
            </div>
          </li>
        )))}
      </ul>
    </div>
  );
}
