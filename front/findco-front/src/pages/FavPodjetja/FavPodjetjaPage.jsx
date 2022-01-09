import React, { Fragment } from "react";
import FavPodjetja from "../../components/FavPodjetja/FavPodjetja";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import useScrollToTop from "../../hooks/useScrollToTop";

const PodjetjaFavPage = () => {
    useScrollToTop();
    return (
        <Fragment>
            <Header/>
            <FavPodjetja page={true} />
            <Footer/>
        </Fragment>
    );
};

export default PodjetjaFavPage;
