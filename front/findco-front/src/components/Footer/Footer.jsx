import React from "react";
import Button from "../../UI/Button/Button";
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

import classes from "./Footer.module.scss";
import LogoZNapisom from "../../UI/Logo/LogoZNapisom";

const footerColumns = [
    {
        id: 1,
        headline: "O nas",
        links: ["O Nas", "Ekipa", "Naša zgodba"],
    },
    {
        id: 2,
        headline: "Kontakti in informacije",
        links: ["Kontakt", "Informacije", "Vprašanja"],
    },
    {
        id: 3,
        headline: "Ostalo",
        links: ["Politika zasebnosti", "Upravljanje osebnih podatkov", "Splošni pogoji poslovanja"],
    },
];

const socials = [
    <FaYoutube />,
    <FaInstagram />,
    <FaTwitter />,
    <FaFacebook />,
];

const Footer = () => {
    return (
        <div className={classes.container}>
            <footer className={classes.footer}>
                <div className={classes.footer__newsletter}>
                    <h4 className={classes.footer__newsletter__headline}>
                         Prijavi se na e-novice in prvi bodi obveščen o novostih
                    </h4>
                    <span>Odjva kadarkoli.</span>
                    <div className={classes.footer__newsletter__form}>
                        <input className={classes.input} type="email" placeholder=" Vaš Email" />
                        <Button>Prijava</Button>
                    </div>
                </div>

                <div className={classes.footer__content}>
                    <div className={classes.footer__content__col} key={1}>
                        <div className={classes.footer__content__col__headline}>O nas</div>
                        <ul className={classes.footer__content__col__links}>
                                 <li> <a href="Onas">O nas</a> </li>
                                 <li> <a href="Ekipa">Ekipa</a> </li>
                                 <li> <a href="NasaZgodba">Naša Zgodba</a> </li>
                                   
                        </ul>
                    </div>
                    <div className={classes.footer__content__col} key={2}>
                        <div className={classes.footer__content__col__headline}>Kontakti in informacije</div>
                        <ul className={classes.footer__content__col__links}>
                                 <li> <a href="Kontakt">Kontakt</a> </li>
                                 <li> <a href="Informacije">Informacije</a> </li>
                                 <li> <a href="Vprasanja">Vprašanja</a> </li>
                                   
                        </ul>
                    </div>
                    <div className={classes.footer__content__col} key={1}>
                        <div className={classes.footer__content__col__headline}>Ostalo</div>
                        <ul className={classes.footer__content__col__links}>
                                 <li> <a href="PolitikaZasebnosti">Politika zasebnosti</a> </li>
                                 <li> <a href="UpravljanjeOsebPodatkov">Upravljanje osebnih podatkov</a> </li>
                                 <li> <a href="SplosniPogojiPoslovanja">Splošni pogoji poslovanja</a> </li>
                                   
                        </ul>
                    </div>
                </div>       

                <div className={classes.footer__base}>
                    <LogoZNapisom />
                    <span className={classes.footer__base__year}>
                        FindCO&nbsp;&copy;&nbsp;{new Date().getFullYear()}
                    </span>
                    <ul className={classes.footer__base__socials}>
                        {socials.map((icon, index) => (
                            <li key={index + 1}>
                                <a href="/">{icon}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
