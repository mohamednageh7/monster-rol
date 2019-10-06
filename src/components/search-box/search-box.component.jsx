import React from 'react';
import './search-box.style.css';




const SearchBox = (props) => {
    const {handleChange, placeholder} = props
    return <input className='search' type='search' onChange={handleChange} placeholder={placeholder} />
};

export default SearchBox;