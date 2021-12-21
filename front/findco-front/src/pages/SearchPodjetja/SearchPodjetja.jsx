import React, { Fragment } from "react";
import Hero from "../../components/Hero/Hero";
import useScrollToTop from "../../hooks/useScrollToTop";

const SearchPodjetja = () => {
    useScrollToTop();
    return (
        <Fragment>
            <Hero className="" isDynmic>Isci Podjetja</Hero>
        </Fragment>
    );
};

export default SearchPodjetja;
