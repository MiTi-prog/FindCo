import React, { Fragment } from "react";
import Hero from "../../components/Hero/Hero";
import FavPodjetja from "../../components/FavPodjetja/FavPodjetja";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <FavPodjetja />
            <Footer />
        </>
    );
};

export default Home;
