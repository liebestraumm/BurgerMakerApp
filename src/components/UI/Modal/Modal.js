import React, {Component} from 'react';
import Classes from './Modal.css';
import Aux from "../../../hoc/AuxContainer/AuxContainer";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    componentDidUpdate() {
        console.log("Updated");
    }

    render() {
        return (
                <Aux>
                    <Backdrop modalClosed={this.props.modalClosed} show={this.props.show}/>
                    <div className={Classes.Modal}
                        style={{transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                                            opacity: this.props.show ? '1' : '0'}}>
                        {this.props.children}
                    </div>
                </Aux>
        );
    }
}

export default Modal;