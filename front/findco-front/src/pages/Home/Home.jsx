import React, { Fragment } from "react";
import Hero from "../../components/Hero/Hero";
import FavPodjetja from "../../components/FavPodjetja/FavPodjetja";

const Home = () => {
    return (
        <Fragment>
            <Hero />
            <FavPodjetja />
        </Fragment>
    );
};

export default Home;
