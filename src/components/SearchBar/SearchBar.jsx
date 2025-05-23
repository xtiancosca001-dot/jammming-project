import React from 'react';
import styles from './search-bar.module.css';

function SearchBar() {
    return (
        <div className={styles.searchBar}>
            <form>
                <input type="text" placeholder="Enter a Song Title" />
                <button type="submit" >SEARCH</button>
            </form>
        </div>
    );
}

export default SearchBar;