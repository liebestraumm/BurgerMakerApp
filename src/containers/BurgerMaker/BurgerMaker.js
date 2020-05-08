import React, {Component} from 'react';
import Aux from "../../hoc/AuxContainer";
import Burger from "../../components/Burger/Burger";
class BurgerMaker extends Component {
    render(){
        return(
            <Aux>
                <Burger />
                <div>BuildControl</div>
            </Aux>
        );
    }
}

export default BurgerMaker;