import React from "react";
import Classes from "./Backdrop.css";
const backdrop = (props) => (
    props.show ? <div onClick={props.modalClosed} className={Classes.Backdrop}></div> : null
);

export default backdrop;