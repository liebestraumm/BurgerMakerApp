import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Sidedrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/AuxContainer/AuxContainer';

const sideDrawer = (props) => {
    let attachedClasses = [classes.Sidedrawer, classes.Close];
    if(props.open) {
        attachedClasses = [classes.Sidedrawer, classes.Open];
    }
    return(
        <Aux>
            <Backdrop show={props.open} modalClosed={props.close} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>

    ) 
}

export default sideDrawer;