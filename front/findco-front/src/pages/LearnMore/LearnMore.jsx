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
                NAJ VAM DO TEGA POMAGAMO
            </span>
            <p className={classes.hero__content__description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere beatae itaque ea
                ducimus, mollitia voluptate laudantium.
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
