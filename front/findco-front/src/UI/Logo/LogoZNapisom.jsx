import React from "react";
import LogoFLetter from "../../assets/LogoFLetterKvadratek";

import classes from "./Logo.module.scss";

const LogoZNapisom = () => {
    return (
        <a href="/" className={classes.logo}>
            <LogoFLetter />
        </a>
    );
      /* <span>FindCo</span> */
};

export default LogoZNapisom;
