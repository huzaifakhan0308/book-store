import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import '../styles/form.css';
import Book from './book';

const Form = () => {
  const [array, setArray] = useState([]);
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);

  const AddBook = () => {
    if (title && author) {
      const obj = {
        title,
        author,
        id: index,
      };
      setArray([...array, obj]);
      dispatch(addBook(obj));
      setIndex(index + 1);
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div className="form-container">
      <Book />
      <header>Add Book</header>
      <form action="">
        <input type="text" placeholder="Title" value={title} onChange={(e) => { setTitle(e.target.value); }} />
        <input type="text" placeholder="Author" value={author} onChange={(e) => { setAuthor(e.target.value); }} />
        <button type="button" onClick={AddBook}>Add</button>
      </form>
    </div>
  );
};

export default Form;
