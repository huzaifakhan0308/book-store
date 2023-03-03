import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getBooks, postBooks } from '../redux/books/booksSlice';
import '../styles/form.css';
import Book from './book';

const Form = () => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const [select, setSelect] = useState('Fiction');

  const AddBook = async () => {
    if (title && author) {
      const obj = {
        title,
        author,
        item_id: `item${uuidv4()}`,
        category: select,
      };
      await dispatch(postBooks(obj));
      dispatch(getBooks());
      setTitle('');
      setAuthor('');
    }
  };

  const selectValue = (e) => {
    setSelect(e.target.value);
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
      <label htmlFor="catagories">
        <select onInput={selectValue}>
          <option value="Fiction">Fiction</option>
          <option value="Nonfiction">Nonfiction</option>
        </select>
      </label>
    </div>
  );
};

export default Form;
