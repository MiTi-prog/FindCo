import React from "react";
import { useHistory } from "react-router-dom";

import classes from "./Button.module.scss";

const Button = ({ oranzna, outline, children, onClick, to}) => {
    const history = useHistory();
    return (
        <button
            onClick={() => {
                onClick && onClick();
                history.push(to);
            }}
            className={`${classes.button} ${outline ? classes.outline : ""} ${oranzna ? classes.oranzna : ""}`}
        >
            {children}
        </button>
    );
};

export default Button;
