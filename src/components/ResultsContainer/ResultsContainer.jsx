import React from 'react';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import styles from './results-container.module.css';

function ResultsContainer({results, resultsOnClick, playlistTracks, playlistOnChange, playlistOnSubmit, playlistTrackOnRemove}) {
    return (
        <div className={styles.resultsContainer}>
            <SearchResults results={results} resultsOnClick={resultsOnClick} />
            <Playlist trackList={playlistTracks} playlistOnChange={playlistOnChange} playlistOnSubmit={playlistOnSubmit} playlistTrackOnRemove={playlistTrackOnRemove}/>
        </div>
    );
}

export default ResultsContainer;