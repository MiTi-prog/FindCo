import React, { Fragment } from "react";
import Button from "../../UI/Button/Button";

import coverVID from "./../../assets/cover.mp4";
import Pise from "./../../assets/piseMajster.jpg";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import classes from "./FooterLinks.module.scss";

// Univerzalen Class

const KontaktText = () => {
    return (
        <Fragment>
            <h1 className={classes.hero__content__title}>Kontakt</h1>
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

const Kontakt = () => {
    return (
        <>
        <Header />
        <div className={classes.container}>
            <img
                src={Pise}
                alt={"kontk"}
                className={classes.photo}
            ></img>

            <div className={classes.hero}>
                <div className={classes.hero__content}>
                    <KontaktText/>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default Kontakt;
