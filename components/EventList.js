import styles from '../styles/Contact.module.css'
import PopoutMenu from '../components/PopoutMenuBar'
import React, { useContext, useState } from 'react';

const EventList = () => {

    const [eventMenu, setMenu] = useState(false);

    const showMenu = () => setMenu(!eventMenu);

    return (
        <>
            <div>
                <button className={styles.menuButton} onClick={showMenu}>Do Stuff</button>
            </div>
            <div className={eventMenu ? styles.dotActive : styles.dot}></div>
            <div className={eventMenu ? styles.eventContainerActive : styles.eventContainer}>
                <PopoutMenu />
            </div>
        </>
    )
}

export default EventList;