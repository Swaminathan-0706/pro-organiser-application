import React from 'react';
import styles from '../Header/Header.module.css'

function Header() {
    return (
        <div className={styles.header}>
            <h1 className={styles.span}>Pro-Organizer</h1>
                <div className={styles.nav}>
                    <div className={styles.navItem}>Home</div>
                    <div className={styles.navItem}>Create a board</div>
                

                </div>
            
        </div>
    )
}

export default Header
