import React from 'react';
import Aux   from '../../hoc/AuxContainer';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import classes from './Layout.css';

const layout = (props) => (
    <Aux>
        {/* <div>Toolbar, SideDrawer, Backdrop</div> */}
        <Toolbar />
        <main className={classes.Content}> 
            {props.children}
        </main>
    </Aux>
);

export default layout;