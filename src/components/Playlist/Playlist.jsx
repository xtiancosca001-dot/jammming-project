import React from 'react';
import styles from './playlist.module.css';
import TrackList from '../Tracklist/Tracklist';
function Playlist({trackList, playlistOnChange, playlistOnSubmit, playlistTrackOnRemove }) {
    return (
        <div className={styles.playlist}>
            <form className={styles.playlistForm} onSubmit={playlistOnSubmit}>
                <input type="text" placeholder="Enter a Playlist Name" onChange={playlistOnChange} />
                <TrackList tracks={trackList} operation={"-"} operationOnClick={playlistTrackOnRemove} />
                <button type="submit">SAVE TO SPOTIFY</button>
            </form>
        </div>
    );  
}

export default Playlist;