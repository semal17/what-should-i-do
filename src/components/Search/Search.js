import { useState } from 'react';

import './Search.css';



function Search({ searchChange }) {
    let [term, setTerm] = useState('');

   let onSearchChange = (e) => {
        let value = e.target.value;
        setTerm(value);
        searchChange(value);
    }

    return (
        <div className='search'>
            <input className='search__input'  
            value={term}
             onChange={onSearchChange}
              type='search'></input>
        </div>
    );
}

export default Search;