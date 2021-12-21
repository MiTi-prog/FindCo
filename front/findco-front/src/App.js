import { Fragment } from "react";
import { Route, Switch } from "react-router";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SearchPodjetja from "./pages/SearchPodjetja/SearchPodjetja";
import Home from "./pages/Home/Home";
import LearnMore from "./pages/LearnMore/LearnMore";
import FavPodjetja from "./pages/FavPodjetja/FavPodjetjaPage";

function App() {
    return (
        <Fragment>
            <Header/>
            <Switch>
                <Route path="/FavPodjetja">
                    <FavPodjetja />
                </Route>
                <Route path="/SearchPodjetja">
                    <SearchPodjetja />
                </Route>
                <Route path="/learnmore">
                    <LearnMore />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </Fragment>
    );
}

export default App;
