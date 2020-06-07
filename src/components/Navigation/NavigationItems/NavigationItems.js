import React from 'react';
import List from '../NavigationItems/NavigationItem/NavigationItem';
import classes from '../NavigationItems/NavigationItems.css'
const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <List href="/" active>
            Burger Maker
        </List>
        <List href="/">
            Checkout
        </List>
    </ul>
)

export default navigationItems;