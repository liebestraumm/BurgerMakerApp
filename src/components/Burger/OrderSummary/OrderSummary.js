import React from "react";
import Aux from "../../../hoc/AuxContainer";
import Button from "../../UI/Button/Button";
import Classes from "./OrderSummary.css";

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
        return (<li key={igKey}>
                    <span style={{textTransform: "capitalize"}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>);
    });

    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <h3 className={Classes.OrderSummary}><strong>Total Price: {props.price.toFixed(2)}$</strong></h3>
            <p>Wanna checkout mate?</p>
                <div className={Classes.OrderSummary}>
                    <Button clicked={props.continue} btnType="Success">CONTINUE</Button>
                    <Button clicked={props.cancel} btnType="Danger">CANCEL</Button>
                </div>
        </Aux>
    );
}

export default orderSummary;

