import React from 'react';
import Track from '../Track/Track'
import styles from './track-list.module.css';

function TrackList({tracks, operation, operationOnClick}) {
    return (
        <div className={styles.trackList}>
            {tracks.map((track,idx) => <Track track={track} key={`${track.id}-${idx}`} operation={operation} operationOnClick={operationOnClick} />)}
        </div>
    )
}

export default TrackList;