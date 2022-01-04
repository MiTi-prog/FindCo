import React, { Fragment } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";

import Button from "../../UI/Button/Button";

import coverVID from "./../../assets/cover.mp4";
import Learn from "./../../assets/learnmore.mp4";
import classes from "./LearnMore.module.scss";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const LearnMoreText = () => {
    useScrollToTop();
    return (
        <Fragment>
            <h1 className={classes.hero__content__title}>pomembne informacije</h1>
            <span className={classes.hero__content__tagline}>
                FindCo, kdo in kaj smo? 
            </span>
            <p className={classes.hero__content__description}>
            FindCo je bil ustvarjen z namenom povezave dobrih izvajalcev del s strankami in pa, da bi naredili slovenski trg bolj transparenten, v smislu, da ne bi več bilo toliko oderuštva pri nekaterih delih. 
            </p>
        </Fragment>
    );
};

const LearnMore = () => {
    return (
        <>
        <Header />
        <div className={classes.container}>
            <video
                autoPlay={true}
                muted
                loop
                className={classes.video}
                id={"video"}
                src={Learn}
            ></video>

            <div className={classes.hero}>
                <div className={classes.hero__content}>
                    <LearnMoreText/>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default LearnMore;
