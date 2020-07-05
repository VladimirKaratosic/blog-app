import React, { Fragment } from 'react';
import './Button.scss';
import clsx from 'clsx';

function Button(props) {
    const {click, label, aditionalClass, type} = props;
    return (
        <Fragment>
            <button type={type || "button"} className={clsx("Button", aditionalClass)} onClick={click}>{label}</button>
        </Fragment>
    )
}

export default Button
