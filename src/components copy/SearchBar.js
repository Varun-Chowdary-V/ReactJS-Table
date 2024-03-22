import React, { useState, Fragment } from 'react';

const SearchBar = ({ setValue, placeholder}) => {
  const [query, setQuery] = useState('');
  return (
    <Fragment>
      {/* Display of search bar */}
      <input 
        value={query}
        placeholder={placeholder}
        style={{borderRadius:'20px',paddingLeft:'15px',height:'30px',marginBottom:'12px'}}
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
