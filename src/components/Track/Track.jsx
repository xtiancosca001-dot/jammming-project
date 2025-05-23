import React from 'react';
import styles from './track.module.css'

function Track({track}) {
    return (
        <div className={styles.track}>
            <div>
                <p class={styles.title}>{track.title}</p>
                <p>{track.artist} | {track.album}</p>
            </div>
            <div>
                <a href="">+</a>
            </div>
        </div>
    );
}

export default Track;