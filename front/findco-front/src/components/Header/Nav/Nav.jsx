import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../UI/Button/Button";
import { IoSearch,IoHeartCircle } from "react-icons/io5";

import classes from "./Nav.module.scss";

const Nav = ({ isMenu, menuToggle }) => {
    return (
        <nav className={isMenu ? classes.menu__nav : classes.nav}>
            <ul>
                <li onClick={menuToggle}>
                    <Link to="/SearchPodjetja"><IoSearch/>{" "}Išči Izvajalca</Link>
                </li>
                <li onClick={menuToggle}>
                    <Link to="/FavPodjetja"><IoHeartCircle/>{" "}Priljubljeni Izvajalci</Link>
                </li>
                <li onClick={menuToggle}>
                    <Link to="/learnmore">Pomembne Informacije</Link>
                </li>
            </ul>
            <div className={classes.menu__nav__cta}>
            <Button to="/booknow" oranzna className={classes.booknow} onClick={menuToggle}>
                Povpraševanje
            </Button>
            <Button to="/booknow" outline className={classes.booknow} onClick={menuToggle}>
                Prijava
            </Button>
            <Button to="/booknow" className={classes.booknow} onClick={menuToggle}> 
                Podjetja 
            </Button>
            </div>
        </nav>
    );
};

export default Nav;
