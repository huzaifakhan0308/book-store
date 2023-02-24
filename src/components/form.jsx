import React from 'react';
import '../styles/form.css';

function form() {
  return (
    <div className="form-container">
      <header>Add Book</header>
      <form action="">
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Author" />
        <button type="button">Add</button>
      </form>
    </div>
  );
}

export default form;
