import React from 'react';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import styles from './results-container.module.css';

function ResultsContainer({results}) {
    return (
        <div className={styles.resultsContainer}>
            <SearchResults results={results} />
            <Playlist />
        </div>
    );
}

export default ResultsContainer;