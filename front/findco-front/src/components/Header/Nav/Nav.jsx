import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../UI/Button/Button";
import { IoSearch,IoHeartCircle,IoPerson } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "./../../../context/AuthContext";

import classes from "./Nav.module.scss";

const Nav = ({ isMenu, menuToggle }) => {
    const { user } = useContext(AuthContext);

    return (
        <nav className={isMenu ? classes.menu__nav : classes.nav}>
            <ul>
                <li onClick={menuToggle}>
                    <Link to="/isci-podjetja"><IoSearch/> Išči Izvajalca</Link>
                </li>
                <li onClick={menuToggle}>
                    <Link to="/priljubljena-podjetja"><IoHeartCircle/> Priljubljeni Izvajalci</Link>
                </li>
                <li onClick={menuToggle}>
                    <Link to="/learn-more">Pomembne Informacije</Link>
                </li>
            </ul>
            <div className={classes.menu__nav__cta}>
            <Button to="/vnos-podjetja" oranzna  onClick={menuToggle}>
                Za Podjetja
            </Button>
            { 
                user ?  <>  
                            <Button to="/moj-racun"  className={classes.booknow} onClick={menuToggle}>
                                <IoPerson/> Moj račun
                            </Button>
                        </>
                :   <>    
                        <Button to="/"  className={classes.booknow} onClick={menuToggle}>
                            Prijava
                        </Button>
                    </> 
            }
            </div>
        </nav>
    );
};

export default Nav;
