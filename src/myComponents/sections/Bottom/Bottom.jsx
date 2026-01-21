import React from 'react'
import styles from './Bottom.module.css'

const Bottom = () => {
    return (
        <div className={styles['bottom-outer']}>
            <div className={styles['bottom-container']}>
                <h2>Create videos online with Microsoft Clipchamp</h2>
                <button>Create a video</button>
            </div>
        </div>
    )
}

export default Bottom
