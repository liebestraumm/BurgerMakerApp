import React from 'react';
import Aux   from '../../hoc/AuxContainer';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import classes from './Layout.css';
import SideDrawer from '../Navigation/Sidedrawer/Sidedrawer';

const layout = (props) => (
    <Aux>
        <Toolbar />
        <SideDrawer />
        <main className={classes.Content}> 
            {props.children}
        </main>
    </Aux>
);

export default layout;