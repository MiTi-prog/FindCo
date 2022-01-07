import React, { Fragment } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Companies from "../../components/Companies/Companies";

const SearchPodjetja = () => {
    useScrollToTop();
    return (
        <>
            <Header />
            <Companies />
            <Footer />
        </>
    );
};

export default SearchPodjetja;
