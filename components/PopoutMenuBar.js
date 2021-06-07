import styles from '../styles/PopOutMenu.module.css';
import { useContext, useState } from 'react';
import SwimData from './data/SwimData';
import HikeData from './data/HikeData';
import FoodData from './data/FoodData';
import DrinkData from './data/DrinkData';
import CoffeeData from './data/CoffeeData';
import Image from 'next/image'
import React from 'react';
import { InfoContext } from '../components/InfoProvider';



const PopoutMenu = () => {

    const { data, setData } = useContext(InfoContext);

    const [dropDown, setDropdown] = useState(false);


    return (
        <>
            <div className={styles.popmenuContainer}>
                <ul className={styles.menuList} >
                    <a onClick={() => setData(SwimData)}><li className={styles.menuItem}>Swimming</li></a>
                    <a onClick={() => setData(HikeData)}><li className={styles.menuItem}>Hiking</li></a>
                    <a onClick={() => setData(FoodData)}><li className={styles.menuItem}>Food</li></a>
                    <a onClick={() => setData(DrinkData)}><li className={styles.menuItem}>Drinks</li></a>
                    <a onClick={() => setData(CoffeeData)}><li className={styles.menuItem}>Coffee</li></a>
                </ul>
            </div>

            <div className={styles.listContainer}>
                <ul className={styles.popList}>
                    {data.map((item, index) => {
                        return (
                            <li key={index} className={styles.popListItem}>
                                <div>
                                    <Image height='50px' width='50px' className={styles.itemImage} src={item.image}></Image>
                                </div>
                                <p className={styles.itemName}>
                                    {item.name}
                                    <span className={styles.itemLocation}>{item.location}</span>
                                </p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}



export default PopoutMenu;