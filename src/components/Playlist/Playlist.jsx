import React from 'react';
import styles from './playlist.module.css';
function Playlist() {
    return (
        <div className={styles.playlist}>
            <input type="text" placeholder="Enter a Playlist Name" />
            <button type="submit">SAVE TO SPOTIFY</button>
        </div>
    );  
}

export default Playlist;