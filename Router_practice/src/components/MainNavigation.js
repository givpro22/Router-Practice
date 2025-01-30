import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './MainNavigation.module.css'

function MainNavigation() {
    return (
        <header className={classes.header}>

        <ul className={classes.list}>
            <li><NavLink to="/"
                className={({isActive}) => 
                    isActive ? classes.active : undefined
                }
                end

            >Home</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
        </ul>
        </header>
    )
}

export default MainNavigation