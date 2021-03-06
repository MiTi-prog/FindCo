import React, { Fragment } from "react";
import Button from "../../UI/Button/Button";

import coverVID from "./../../assets/cover.mp4";

import classes from "./Hero.module.scss";

// Univerzalen Class

const HomePageContent = () => {
    return (
        <Fragment>
            <h1 className={classes.hero__content__title}>"Urejen Dom je največji užitek"</h1>
            <span className={classes.hero__content__tagline}>
                NAJ VAM DO TEGA POMAGAMO
            </span>
            <p className={classes.hero__content__description}>
                smo spletna platforma, ki povezuje uporabnike spleta in ponudnike različnih storitev
            </p>
            <div className={classes.hero__content__cta}>
                <Button to="/isci-podjetja">Iščem Storitev</Button>
                <Button to="/vnos-podjetja" outline>
                    Ponujam Storitev
                </Button>
            </div>
        </Fragment>
    );
};

const Hero = ({ isDynmic, children }) => {
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
                    {!isDynmic && <HomePageContent />}
                    {isDynmic && <h1 className={classes.hero__content__title}>{children}</h1>}
                </div>
            </div>
        </div>
    );
};

export default Hero;
