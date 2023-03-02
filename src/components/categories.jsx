import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkTheStatus } from '../redux/categories/categoriesSlice';
import '../styles/categories.css';

export default function Categories() {
  const category = useSelector((state) => state.category.categories);
  const [boolean, setBoolean] = useState(false);
  const dispatch = useDispatch();
  const checkStatus = () => {
    dispatch(checkTheStatus());
    setBoolean(true);
  };
  return (
    <div className="categories-container">
      <ul className="category" style={{ display: boolean ? 'flex' : 'none' }}>
        {category.map((e) => (
          <li key={e.id}>
            {e.category}
          </li>
        ))}
      </ul>
      {boolean ? '' : <button className="check-status-btn" type="button" onClick={checkStatus}>Check Status</button>}
    </div>
  );
}
