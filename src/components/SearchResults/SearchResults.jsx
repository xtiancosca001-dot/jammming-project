import React from 'react';
import TrackList from '../Tracklist/Tracklist';
import styles from './search-results.module.css';
import tracks from '../../utils/tracks';

function SearchResults() {
    return (
        <div className={styles.searchResults}>
            <h2>Results</h2>
            <TrackList tracks={tracks}/>
        </div>
    );
}

export default SearchResults;