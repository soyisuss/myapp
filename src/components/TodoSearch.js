import React from 'react'
import './../css/TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {
    return (
        <div>
            <input
                placeholder="Search..."
                className="TodoSearch"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
            />
        </div>
    );
}

export { TodoSearch };