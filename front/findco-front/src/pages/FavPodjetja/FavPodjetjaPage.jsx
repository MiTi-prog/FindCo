import React, { Fragment } from "react";
import FavPodjetja from "../../components/FavPodjetja/FavPodjetja";

import useScrollToTop from "../../hooks/useScrollToTop";

const PodjetjaFavPage = () => {
    useScrollToTop();
    return (
        <Fragment>
            <FavPodjetja page={true} />
        </Fragment>
    );
};

export default PodjetjaFavPage;
