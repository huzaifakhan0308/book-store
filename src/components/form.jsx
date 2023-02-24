import React, { useState } from 'react';
import Book from './book';
import '../styles/form.css';

const Form = () => {
  const [array, setArray] = useState([]);
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');

  const AddBook = () => {
    if (title && author) {
      const obj = {
        title,
        author,
      };
      setArray([...array, obj]);
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div className="form-container">
      <Book array={array} />
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
