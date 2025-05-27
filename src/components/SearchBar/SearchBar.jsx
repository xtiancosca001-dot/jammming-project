import React from 'react';
import styles from './search-bar.module.css';

function SearchBar({searchOnChange, searchHandler}) {
    return (
        <div className={styles.searchBar}>
            <form onSubmit={searchHandler}>
                <input type="text" placeholder="Enter a Song Title" onChange={searchOnChange} />
                <button type="submit" >SEARCH</button>
            </form>
        </div>
    );
}

export default SearchBar;