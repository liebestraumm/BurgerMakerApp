import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const buildControls = (props) => (
        <div className={classes.BuildControls}>
            <p><strong>Current Price: {props.price.toFixed(2)}$</strong></p>
             {controls.map(c => 
                 <BuildControl key={c.label} label={c.label} 
                               added={() => props.ingredientAdded(c.type)}
                               removed={() => props.ingredientRemoved(c.type)}
                               disabled={props.disabled[c.type]}/>
             )}
             <button onClick={props.ordered} disabled={!props.purchasable} className={classes.OrderButton}>ORDER NOW!</button>
        </div> 

        //OR:
        // <div className={classes.BuildControls}>
        //      {controls.map((c) => {
        //          return <BuildControl key={c.label} label={c.label} />
        //      })}
        // </div> 
)

export default buildControls;