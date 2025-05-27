import React from 'react';
import styles from './track.module.css'

function Track({track, operation}) {
    return (
        <div className={styles.track}>
            <div>
                <p className={styles.name}>{track.name}</p>
                <p>{track.artist} | {track.album}</p>
            </div>
            <div className={styles.operation}>
                <a href="">{operation}</a>
            </div>
        </div>
    );
}

export default Track;