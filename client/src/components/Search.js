import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../styles/Search.css'; 

const Search = ({ onSearchChange }) => {
    const [searchInput, setSearchInput] = useState('');
    const [error, setError] = useState('');

    // Function to handle input change and invoke the parent component's search handler
    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setSearchInput(inputValue);

        // Invoke the parent component's search handler
        onSearchChange(inputValue);

        // Validation example: Minimum length check
        if (inputValue.length < 3) {
            setError('');
        } else {
            setError('');
        }
    };

    return (
        <div className="search-container">
            <div className={`search-box ${error ? 'error' : ''}`}>
                <input
                    type="text"
                    placeholder="Search books by ..."
                    value={searchInput}
                    onChange={handleInputChange}
                />
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </div>
            {error && <div className="error-message">{error}</div>}
        </div>
    );
};

export default Search;
