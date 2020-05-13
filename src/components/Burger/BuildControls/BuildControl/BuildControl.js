import React from 'react';
import classes from './BuildControl.css';

const controlTools = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}> {props.label} </div> 
        <button className={classes.More}>Add</button>
        <button className={classes.Less}>Remove</button>
    </div>
);

export default controlTools;