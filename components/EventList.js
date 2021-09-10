import styles from '../styles/Contact.module.css'
import PopoutMenu from '../components/PopoutMenuBar'
import React, { useState } from 'react';

const EventList = () => {

    const [eventMenu, setMenu] = useState(false);

    const showMenu = () => setMenu(!eventMenu);

    return (
        <>
            <div>
                <button className={eventMenu ? styles.menuButtonActive : styles.menuButton} onClick={showMenu}>{eventMenu ? 'Hide Menu' : 'Things to do'}</button>
            </div>
            <div className={eventMenu ? styles.eventContainerActive : styles.eventContainer}>
                <PopoutMenu />
            </div>
        </>
    )
}

export default EventList;