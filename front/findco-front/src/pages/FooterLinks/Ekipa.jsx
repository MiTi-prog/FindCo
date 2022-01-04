import React, { Fragment } from "react";
import Button from "../../UI/Button/Button";

import coverVID from "./../../assets/cover.mp4";

import classes from "./FooterLinks.module.scss";

// Univerzalen Class

const EkipaText = () => {
    return (
        <Fragment>
            <h1 className={classes.hero__content__title}>Ekipa</h1>
            <span className={classes.hero__content__tagline}>
                NAJ VAM DO TEGA POMAGAMO
            </span>
            <p className={classes.hero__content__description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere beatae itaque ea
                ducimus, mollitia voluptate laudantium.
            </p>
            <div className={classes.hero__content__cta}>
                <Button to="/booknow">Search</Button>
                <Button to="/learnmore" outline>
                    Learn More
                </Button>
            </div>
        </Fragment>
    );
};

const Ekipa = () => {
    return (
        <div className={classes.container}>
            <video
                autoPlay={true}
                muted
                loop
                className={classes.video}
                id={"video"}
                src={coverVID}
            ></video>
            <div className={classes.hero}>
                <div className={classes.hero__content}>
                    <EkipaText/>
                </div>
            </div>
        </div>
    );
};

export default Ekipa;