import React, {Component} from 'react';
import Aux from "../../hoc/AuxContainer";
import Burger from "../../components/Burger/Burger";
class BurgerMaker extends Component {

    state = {
        ingredients : {
            salad: 0,
            cheese: 0,
            meat: 0,
            bacon: 0
        }
    }

    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>BuildControl</div>
            </Aux>
        );
    }
}

export default BurgerMaker;