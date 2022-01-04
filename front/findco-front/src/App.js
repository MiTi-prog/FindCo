//import { Fragment } from "react";
import { Route, Switch } from "react-router";
//import Footer from "./components/Footer/Footer";
//import Header from "./components/Header/Header";
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
                <Route path="/priljubljena-podjetja">
                    <FavPodjetja />
                </Route>
                <Route path="/isci-podjetja">
                    <SearchPodjetja />
                </Route>
                <Route path="/learn-more">
                    <LearnMore />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/o-nas">
                    <Onas />
                </Route>
                <Route exact path="/ekipa">
                    <Ekipa />
                </Route>
                <Route exact path="/informacije">
                    <Informacije />
                </Route>
                <Route exact path="/kontakt">
                    <Kontakt />
                </Route>
                <Route exact path="/nasa-zgodba">
                    <NasaZgodba />
                </Route>
                <Route exact path="/politika-zasebnosti">
                    <PolitikaZasebnosti />
                </Route>
                <Route exact path="/splosni-pogoji-poslovanja">
                    <SplosniPogojiPoslovanja />
                </Route>
                <Route exact path="/upravljanje-osebnih-podatkov">
                    <UpravljanjeOsebPodatkov />
                </Route>
                <Route exact path="/vprasanja">
                    <Vprasanja />
                </Route>

            </Switch>
        </>
    );
}

export default App;
