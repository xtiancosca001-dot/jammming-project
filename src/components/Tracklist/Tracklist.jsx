import React from 'react';
import Track from '../Track/Track'
import styles from './track-list.module.css';

function TrackList({tracks}) {
    return (
        <div className={styles.trackList}>
            {tracks.map(track => <Track track={track} />)}
        </div>
    )
}

export default TrackList;