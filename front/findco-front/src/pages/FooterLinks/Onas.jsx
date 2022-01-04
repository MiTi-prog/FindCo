import React, { Fragment } from "react";
import Button from "../../UI/Button/Button";

import coverVID from "./../../assets/cover.mp4";
import Onas12 from "./../../assets/onas.mp4";

import classes from "./FooterLinks.module.scss";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


// Univerzalen Class

const OnasText = () => {
    return (
        <Fragment>
            <h1 className={classes.hero__content__title}>O Nas</h1>
            <span className={classes.hero__content__tagline}>
                NAJ VAM DO TEGA POMAGAMO
            </span>
            <p className={classes.hero__content__description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere beatae itaque ea
                ducimus, mollitia voluptate laudantium.
            </p>
        </Fragment>
    );
};

const Onas = () => {
    return (
        <>
        <Header />
        <div className={classes.container}>
        <   video
                autoPlay={true}
                muted
                loop
                className={classes.video}
                id={"video"}
                src={Onas12}
            ></video>

            <div className={classes.hero}>
                <div className={classes.hero__content}>
                    <OnasText/>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default Onas;
