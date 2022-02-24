import React from 'react';
import '../../styles/searchBox.css';


export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={e => handleChange(e)}
  />
);