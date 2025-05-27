import React from 'react';
import TrackList from '../Tracklist/Tracklist';
import styles from './search-results.module.css';


function SearchResults({results, resultsOnClick}) {
    return (
        <div className={styles.searchResults}>
            <h2>Results</h2>
            {results.length>0 ? <TrackList tracks={results} operation={"+"} operationOnClick={resultsOnClick}/> : <p>No results found</p> }
        </div>
    );
}

export default SearchResults;