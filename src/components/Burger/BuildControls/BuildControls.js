import React from 'react';
import { render } from '@testing-library/react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <BuildControl label={props.label} />
    </div>
        
)

export default buildControls;