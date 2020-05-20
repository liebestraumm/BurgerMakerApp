import React from 'react';
import Classes from './Modal.css';
import Aux from "../../../hoc/AuxContainer";
import Backdrop from "../Backdrop/Backdrop";

const modal = (props) => (
    <Aux>
        <Backdrop modalClosed={props.modalClosed} show={props.show}/>
        <div className={Classes.Modal}
            style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                                opacity: props.show ? '1' : '0'}}>
            {props.children}
        </div>
    </Aux>
);

export default modal;