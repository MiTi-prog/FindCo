import React, { useEffect, useRef } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./PodjetjeVnos.scss";
import Button from "../../UI/Button/Button";
import Hisa1 from "./../../assets/piseMajster.jpg";

function PodjetjaVnos() {
    // textInput must be declared here so the ref can refer to it
    const companyName = useRef(null);
    const taxNumber = useRef(null);
    const email = useRef(null);
    const region = useRef(null);
    const lineOfWork = useRef(null);
    const phone = useRef(null);
    const address = useRef(null);
    const city = useRef(null);
    const postalCode = useRef(null);
    const country = useRef(null);
    const logoPic = useRef(null);
    
   
    return (
        <>
        <Header />
            <div className="container">
            <img
                src={Hisa1}
                alt={"Hisa1"}
                className="photo"
            ></img>
                <div className="hero"> 
                    <div className="hero__content">
                        <h1 className="hero__content__title">Dodaj Podjetje</h1>
                         
                          <form>

                            <div class="form__group field">
                                    <input type="input" class="form__field" placeholder="Ime Podjetja" name="imePodjetja" id='imePodjetja'  ref={companyName} required />
                                    <label for="imePodjetja" class="form__label">Ime Podjetja</label>
                            </div> <br /> 

                            <div class="form__group field">
                                    <input type="input" class="form__field" placeholder="Davcna Stevilka" name="taxNumb" id='taxNumb' ref={taxNumber} required />
                                    <label for="taxNumb" class="form__label">Davčna Številka</label>
                            </div> <br /> 

                            <div class="form__group field">
                                    <input type="input" class="form__field" placeholder="Email" name="email" id='email' ref={email} required />
                                    <label for="email" class="form__label">Email</label>
                            </div> <br /> 

                            <div class="form__group field">
                                    <input type="input" class="form__field" placeholder="Telefon" name="telefon" id='telefon' ref={phone} required />
                                    <label for="telefon" class="form__label">Telefon</label>
                            </div> <br /> 

                            
                            <div class="form__group field">
                                    <input type="input" class="form__field" placeholder="Naslov" name="naslov" id='naslov' ref={address} required />
                                    <label for="naslov" class="form__label">Naslov</label>
                            </div> <br /> 

                            <div class="form__group field">
                                    <input type="input" class="form__field" placeholder="Mesto" name="mesto" id='mesto' ref={city} required />
                                    <label for="mesto" class="form__label">Mesto</label>
                            </div> <br /> 


                            <div class="form__group field">
                                    <input type="input" class="form__field" placeholder="Poštna št." name="posta" id='posta'  ref={postalCode} required />
                                    <label for="posta" class="form__label">Poštna št.</label>
                            </div> <br /> 

                            <div class="form__group field">
                                    <input type="input" class="form__field" placeholder="Država" name="drzava" id='drzava' ref={country} required />
                                    <label for="posta" class="form__label">Država</label>
                            </div> <br /> 
                            
                            <div class="form__group field">
                                    <input type="input" class="form__field" placeholder="Regija" name="regia" id='regia' ref={region} required />
                                    <label for="regia" class="form__label">Regija dela</label>
                            </div> <br /> 

                            <div class="form__group field">
                                    <input type="input" class="form__field" placeholder="Vrsta Dela" name="vrstaDela" id='vrstaDela' ref={lineOfWork} required />
                                    <label for="vrstaDela" class="form__label">Vrsta Dela ki ga upravljate</label>
                            </div> <br /> 
                            
                           
                            
                            <br /><br /> <br />

                         </form>
                        
                         <div className="hero__content__cta">
                            <Button to="/">Shrani Vnos</Button>
                            <Button to="/learn-more" outline>
                                Prekliči
                            </Button>
                         </div>
                </div>
            </div>
        </div>
        
       

        <Footer />
        
        </>
    )
}

export default PodjetjaVnos
