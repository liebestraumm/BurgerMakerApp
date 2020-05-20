import React from 'react';
import classes from './BuildControl.css';

const controlTools = (props) => (
    <div className={classes.BuildControl}>
        {/* <div className={classes.Label}> <h4> {props.label} </h4></div>  */}
        <div className={classes.Label}> {props.label} </div> 
        <button className={classes.More} onClick={props.added}>Add</button>
        <button className={classes.Less} onClick={props.removed} disabled={props.disabled}>Remove</button>
    </div>
);

export default controlTools;