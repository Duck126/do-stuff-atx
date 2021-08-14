import styles from '../styles/PopOutMenu.module.css';
import { useContext } from 'react';
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

    const itemData = [
        {
            id: 1,
            data: SwimData,
            name: 'Swimming',
            active: true
        },
        {
            id: 2,
            data: HikeData,
            name: 'Hiking',
            active: false
        },
        {
            id: 3,
            data: FoodData,
            name: 'Food',
            active: false
        },
        {
            id: 4,
            data: DrinkData,
            name: 'Drinks',
            active: false
        },
        {
            id: 5,
            data: CoffeeData,
            name: 'Coffee',
            active: false
        },
    ];

    const handleClick = (item, index) => {
        setData(item.data);
    }

    const handleSelction = (e, index) => {
        const newData = {locData: data.locData, activeItem: index};
        setData(newData);
    }

    return (
        <>
            <div className={styles.popmenuContainer}>
                <ul className={styles.menuList} >
                    {itemData.map((item, index) => (
                        <a id={item.id} key={index} onClick={() => handleClick(item)}><li className={styles.menuItem}>{item.name}</li></a>
                    ))}
                </ul>
            </div>

            <div className={styles.placeContainer}>
                <ul className={styles.popList}>
                    {data.locData.map((item, index) => {
                        return (
                            <li key={index} className={styles.popListItem} onClick={(e) => handleSelction(e, index)}>
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