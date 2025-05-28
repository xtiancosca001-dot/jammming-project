import React from 'react';
import styles from './track.module.css'

function Track({track, operation, operationOnClick}) {
    return (
        <div className={styles.track}>
            <div>
                <p className={styles.name}>{track.name}</p>
                <p>{track.artists.map(a=>a.name).join(", ")} | {track.album.name}</p>
            </div>
            <div className={styles.operation}>
                <a id={track.id} onClick={operationOnClick}>{operation}</a>
            </div>
        </div>
    );
}

export default Track;