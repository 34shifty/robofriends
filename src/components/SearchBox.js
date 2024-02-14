import React from 'react';
import './SearchBox.css';

const SearchBox =({onSearchChange, searchValue}) => {
    return (
        <input type='text' placeholder='search robots' onChange={onSearchChange} value={searchValue}></input>
    )
}

export default SearchBox;