import React from "react";
import LogoFLetter from "../../assets/LogoFLetter";

import classes from "./Logo.module.scss";

const Logo = () => {
    return (
        <a href="/" className={classes.logo}>
            <LogoFLetter />
        </a>
    );
      /* <span>FindCo</span> */
};

export default Logo;
