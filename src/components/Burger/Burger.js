import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
                    return [...Array(props.ingredients[igKey])].map((_, i) => {
                        return <BurgerIngredient key={igKey + i} type={igKey} />
                    });
                }).reduce((initialElement, currentElement) => {
                    console.log("Initial", initialElement);
                    console.log("Current", currentElement);
                    return initialElement.concat(currentElement);
                }, []);

        if(transformedIngredients.length === 0) {
            transformedIngredients = <p>Please add your first ingredient</p>
        }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;