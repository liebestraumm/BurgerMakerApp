import React, {Component} from 'react';
import Aux from "../../hoc/AuxContainer";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

class BurgerMaker extends Component {

    state = {
        ingredients : {
            salad: 0,
            cheese: 0,
            meat: 0,
            bacon: 0
        },
        label: "Label"
    }

    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls label={this.state.label}/>
            </Aux>
        );
    }
}

export default BurgerMaker;