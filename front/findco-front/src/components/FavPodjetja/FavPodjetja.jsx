import React from "react";

import classes from "./FavPodjetja.module.scss";

import { IoLocationOutline,IoBriefcaseSharp } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";

import ObzorjeJPG from "./../../images/obzorje.png";
import RajmaxJPG from "./../../images/rajmax.jpg";
import Aab from "./../../images/aab.jpg";
import Naino from "./../../images/Naino.jpg";
import Inteligent from "./../../images/inteligent.png";
import Den from "./../../images/DEN.jpg";
import Daibau from "./../../images/daibau.jpg";
import Danta from "./../../images/Danta.jpg";
import Sokpro from "./../../images/Sokpro.jpg";


import { Link } from "react-router-dom";

const locationData = [
    { id: 1,    location: "Brežice",       info: "OBZORJE SGP",      isFeatured: true,       img: ObzorjeJPG,           ostalo: "proizvodnja, prodaja ter montaža PVC, ALU vhodnih vrat, oken, garažnih vrat, avtomatskih vrat, zimskih vrtov, rolet, okenskih polic"},
    { id: 2,    location: "Kozje",         info: "RAJMAX",           isFeatured: false,       img: RajmaxJPG,            ostalo: "Gradbena dela, gradbeništvo, sanacije, adaptacije, temelji"   },
    { id: 3,    location: "Ljubljana",     info: "AAB ARHITEKTURA",  isFeatured: false,      img: Aab,                  ostalo: "arhitekturno načrtovanje, grafični dizajn, notranje oblikovanje" },
    { id: 4,    location: "Brežice",       info: "NAINO",            isFeatured: true,      img: Naino,                ostalo: "arhitekt, arhitekti, arhitektura, projektiranje, načrtovanje, oblikovanje prostora, notranja oprema, enodružinske hiše, stanovanja, interier" },
    { id: 5,    location: "Ljubljana",     info: "INTELIGENT",       isFeatured: true,      img: Inteligent,           ostalo: "pametne hiše, avtomatizacija doma, rešitve po meri"},
    { id: 6,    location: "Ljubljana",     info: "DEN PROJEKT",      isFeatured: false,      img: Den,                  ostalo: "fasade, knauf sistemi, slikopleskarstvo"},
    { id: 7,    location: "Ljubljana",     info: "DAIBAU HAUS",      isFeatured: true,       img: Daibau,               ostalo: "Gradnja hiše in vodenje projektov"},
    { id: 8,    location: "Radovljica",    info: "DANTA",            isFeatured: false,       img: Danta,                ostalo: "Centralno ogrevanje, toplotna črpalka, hlajenje"},
    { id: 9,    location: "Goriščnica",    info: "SOKPRO",           isFeatured: true,      img: Sokpro,               ostalo: "Arhitekt, projektant, načrtovanje" },
];

const FavPodjetja = ({ page }) => {
    const mapData = !page ? locationData.slice(0, 6) : locationData;
    return (
        <div className={classes.container}>
            <div className={`${classes.favPodjetje} ${page ? classes.page : ""}`}>
                <div className={classes.favPodjetje__content}>
                    <h2 className={classes.favPodjetje__content__title}>Priljubljeni Izvajalci Del</h2>
                    
                    <div className={classes.favPodjetje__content__gallery}>
                        {mapData.map(({ id, location, info, isFeatured, img }) => (
                            <div className={classes.gallery__item} key={id}>
                                <img
                                    src={img}
                                    alt={location}
                                    className={classes.gallery__item__img}
                                />
                                <div className={classes.overlay} />
                                <div className={classes.gallery__item__content}>
                                <IoBriefcaseSharp/>
                                    <h2 className={classes.gallery__item__content__info}>
                                        {info}  
                                    </h2>
                                    <IoLocationOutline />
                                    <h3 className={classes.gallery__item__content__location}> {location} </h3> 
                                </div>
                                {isFeatured && (
                                    <div className={classes.gallery__item__tag}>Featured</div>
                                )}
                            </div>
                        ))}
                    </div>

                    {!page && (
                        <div className={classes.favPodjetje__content__viewmore}>
                            <Link to="/FavPodjetja">
                                view more <BsArrowRight />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FavPodjetja;
