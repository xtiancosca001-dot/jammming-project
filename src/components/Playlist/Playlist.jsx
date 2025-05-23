import React from 'react';
import styles from './playlist.module.css';
function Playlist() {
    return (
        <div className={styles.playlist}>
            <h2>Playlist</h2>
            <button type="submit">SAVE TO SPOTIFY</button>
        </div>
    );  
}

export default Playlist;