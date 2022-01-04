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

import Onas from "./pages/FooterLinks/Onas";
import Ekipa from "./pages/FooterLinks/Ekipa";
import Informacije from "./pages/FooterLinks/Informacije";
import Kontakt from "./pages/FooterLinks/Kontakt";
import NasaZgodba from "./pages/FooterLinks/NasaZgodba";
import PolitikaZasebnosti from "./pages/FooterLinks/PolitikaZasebnosti";
import SplosniPogojiPoslovanja from "./pages/FooterLinks/SplosniPogojiPoslovanja";
import UpravljanjeOsebPodatkov from "./pages/FooterLinks/UpravljanjeOsebPodatkov";
import Vprasanja from "./pages/FooterLinks/Vprasanja";


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
                <Route path="/LearnMore">
                    <LearnMore />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/Onas">
                    <Onas />
                </Route>
                <Route exact path="/Ekipa">
                    <Ekipa />
                </Route>
                <Route exact path="/Informacije">
                    <Informacije />
                </Route>
                <Route exact path="/Kontakt">
                    <Kontakt />
                </Route>
                <Route exact path="/NasaZgodba">
                    <NasaZgodba />
                </Route>
                <Route exact path="/PolitikaZasebnosti">
                    <PolitikaZasebnosti />
                </Route>
                <Route exact path="/SplosniPogojiPoslovanja">
                    <SplosniPogojiPoslovanja />
                </Route>
                <Route exact path="/UpravljanjeOsebPodatkov">
                    <UpravljanjeOsebPodatkov />
                </Route>
                <Route exact path="/Vprasanja">
                    <Vprasanja />
                </Route>

            </Switch>
        </>
    );
}

export default App;
