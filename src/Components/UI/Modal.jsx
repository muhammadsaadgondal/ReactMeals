import React, { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const BackDp = (props) => {
    return <div onClick={props.drop} className={classes.backdp} ></div>
}
const Overlay = (props) => {
    return <div className={classes.overlay}>
        <div className={classes.content}>
            {props.children}
        </div>
    </div>
}


const portalElement = document.getElementById("backdrop");
const Modal = (props) => {
    return <Fragment>
        {ReactDOM.createPortal(<BackDp drop={props.drop} />, portalElement)}
        {ReactDOM.createPortal(<Overlay> {props.children}</Overlay>, portalElement)}
    </Fragment>

}

export default Modal;