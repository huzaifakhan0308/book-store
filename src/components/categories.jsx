import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkTheStatus } from '../redux/categories/categoriesSlice';
import '../styles/categories.css';

export default function Categories() {
  const category = useSelector((state) => state.category.categories);
  const dispatch = useDispatch();
  const checkStatus = () => {
    dispatch(checkTheStatus());
  };
  return (
    <div className="categories-container">
      <div className="category">
        {category}
      </div>
      {category.length === 0 ? <button className="check-status-btn" type="button" onClick={checkStatus}>Check Status</button> : ''}
    </div>
  );
}
