import React, { Fragment } from "react";
import Hero from "../../components/Hero/Hero";
import useScrollToTop from "../../hooks/useScrollToTop";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const SearchPodjetja = () => {
    useScrollToTop();
    return (
        <Fragment>
            <Header />
            <Hero className="" isDynmic>Isci Podjetja</Hero>
            <Footer />
        </Fragment>
    );
};

export default SearchPodjetja;
