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
            <h1 className={classes.hero__content__title}>{" "}</h1>
            <span className={classes.hero__content__tagline}>
                 FindCo, kdo in kaj smo? 
            </span>
            <p className={classes.hero__content__description}>
                Na kratko smo spletna platforma, ki povezuje uporabnike spleta in ponudnike različnih storitev.
            </p>
            <span className={classes.hero__content__tagline}>
                 Razlog za Nastanek
            </span>
            <p className={classes.hero__content__description}>
                FindCo je bil ustvarjen z namenom povezave dobrih izvajalcev del s strankami in pa, da bi naredili slovenski trg bolj transparenten, v smislu, da ne bi več bilo toliko oderuštva pri nekaterih delih. 
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
