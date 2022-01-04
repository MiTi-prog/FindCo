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
                        <Button to="/learn-more">Prijava</Button>
                    </div>
                </div>

                <div className={classes.footer__content}>
                    <div className={classes.footer__content__col} key={1}>
                        <div className={classes.footer__content__col__headline}>O nas</div>
                        <ul className={classes.footer__content__col__links}>
                                 <li> <a href="o-nas">O nas</a> </li>
                                 <li> <a href="ekipa">Ekipa</a> </li>
                                 <li> <a href="nasa-zgodba">Naša Zgodba</a> </li>
                                   
                        </ul>
                    </div>
                    <div className={classes.footer__content__col} key={2}>
                        <div className={classes.footer__content__col__headline}>Kontakti in informacije</div>
                        <ul className={classes.footer__content__col__links}>
                                 <li> <a href="kontakt">Kontakt</a> </li>
                                 <li> <a href="informacije">Informacije</a> </li>
                                 <li> <a href="vprasanja">Vprašanja</a> </li>
                                   
                        </ul>
                    </div>
                    <div className={classes.footer__content__col} key={1}>
                        <div className={classes.footer__content__col__headline}>Ostalo</div>
                        <ul className={classes.footer__content__col__links}>
                                 <li> <a href="politika-zasebnosti">Politika zasebnosti</a> </li>
                                 <li> <a href="upravljanje-osebnih-podatkov">Upravljanje osebnih podatkov</a> </li>
                                 <li> <a href="splosni-pogoji-poslovanja">Splošni pogoji poslovanja</a> </li>
                                   
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
