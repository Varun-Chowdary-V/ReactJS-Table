import React, { useState, Fragment } from 'react';

const SearchBar = ({ setValue, placeholder}) => {
  const [query, setQuery] = useState('');
  return (
    <Fragment>
      <input 
        value={query}
        placeholder={placeholder}
        onChange={(e) => {
          setQuery(e.target.value);
          setValue(query);
          }
        }
        
      />
    </Fragment>
  );
}

export default SearchBar;
