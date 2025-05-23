import React from 'react';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import styles from './results-container.module.css';

function ResultsContainer() {
    return (
        <div className={styles.resultsContainer}>
            <SearchResults />
            <Playlist />
        </div>
    );
}

export default ResultsContainer;