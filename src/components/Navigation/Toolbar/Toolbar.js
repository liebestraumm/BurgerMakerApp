import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import Nav from '../NavigationItems/NavigationItems';
import DrawerToggle from '../Sidedrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        {/* <div onClick={props.clicked} className={classes.Menu}>MENU</div> */}
        <DrawerToggle clicked={props.clicked}/>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <Nav />
        </nav>
    </header>
)

export default toolbar;