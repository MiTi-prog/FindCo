import { Fragment } from "react";
import { Route, Switch } from "react-router";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SearchPodjetja from "./pages/SearchPodjetja/SearchPodjetja";
import Home from "./pages/Home/Home";
import LearnMore from "./pages/LearnMore/LearnMore";
import FavPodjetja from "./pages/FavPodjetja/FavPodjetjaPage";
import Login from "./pages/Login/Login";
import Register from "./components/Register/Register";

function App() {
    return (
        <>
            <Switch>
                <Route path="/prijava">
                    <Login />
                </Route>
                <Route path="/registracija">
                    <Register />
                </Route>
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
        </>
    );
}

export default App;
