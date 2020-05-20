import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';
let itIs = false;
const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
                    console.log("aaa");
                    return [...Array(props.ingredients[igKey])].map((_, i) => {
                        return <BurgerIngredient key={igKey + i} type={igKey} />
                    });
                }).reduce((initialElement, currentElement) => {
                    console.log("Initial", initialElement);
                    console.log("Current", currentElement);
                    return initialElement.concat(currentElement);
                }, []);

        if(transformedIngredients.length === 0 || itIs) {
            transformedIngredients = <p>Ponle mas verga a esa vaina menol!</p>
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