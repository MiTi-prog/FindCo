import React, { Fragment } from "react";
import Button from "../../UI/Button/Button";

import coverVID from "./../../assets/cover.mp4";
import Hisa1 from "./../../assets/hisa1.jpg";

import classes from "./FooterLinks.module.scss";

// Univerzalen Class

const NasaZgodbaText = () => {
    return (
        <Fragment>
            <h1 className={classes.hero__content__title}>Naša Zgodba</h1>
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

const NasaZgodba = () => {
    return (
        <div className={classes.container}>
            <img
                src={Hisa1}
                alt={"Hisa1"}
                className={classes.photo}
            ></img>

            <div className={classes.hero}>
                <div className={classes.hero__content}>
                    <NasaZgodbaText/>
                </div>
            </div>
        </div>
    );
};

export default NasaZgodba;
