import React, {} from 'react';

import './search.styles.css';

export const Search = ({ placeholder, name, type, onInputChange }) => (
  
    <input
          onChange={onInputChange}
          name={name}
          type={type}
          placeholder={placeholder}
          className='search'
        />
  
)