import React from 'react';
import Track from '../Track/Track'
import styles from './track-list.module.css';

function TrackList({tracks, operation}) {
    return (
        <div className={styles.trackList}>
            {tracks.map(track => <Track track={track} key={track.id} operation={operation} />)}
        </div>
    )
}

export default TrackList;