import React, { useEffect, useRef } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Profile.scss";
import Button from "../../UI/Button/Button";
import Hisa1 from "./../../assets/piseMajster.jpg";

function Profile() {
    // textInput must be declared here so the ref can refer to it
    const firstName = useRef(null);
    const lastName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const passwordAgain = useRef(null);
    const birthDate = useRef(null);
    const phone = useRef(null);
    const address = useRef(null);
    const city = useRef(null);
    const postalCode = useRef(null);
    const country = useRef(null);
   
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
                        <h1 className="hero__content__title">Uredi Profil</h1>
                         
                          <form>

                            <div class="form__group field">
                                    <input type="input" class="form__field" placeholder="Ime" name="ime" id='ime'  ref={firstName} required />
                                    <label for="ime" class="form__label">Ime</label>
                            </div> <br /> 

                            <div class="form__group field">
                                    <input type="input" class="form__field" placeholder="Priimek" name="priimek" id='priimek' ref={lastName} required />
                                    <label for="priimek" class="form__label">Priimek</label>
                            </div> <br /> 

                            <div class="form__group field">
                                    <input type="input" class="form__field" placeholder="Email" name="email" id='email' ref={email} required />
                                    <label for="email" class="form__label">Email</label>
                            </div> <br /> 

                            <div class="form__group field">
                                    <input type="password" class="form__field" placeholder="Geslo" name="geslo" id='geslo' ref={password} required />
                                    <label for="geslo" class="form__label">Geslo</label>
                            </div> <br /> 
                                
                            <div class="form__group field">
                                    <input type="password" class="form__field" placeholder="Ponovi Geslo" name="ponoviGeslo" id='ponoviGeslo' ref={passwordAgain} required />
                                    <label for="ponoviGeslo" class="form__label">Ponovi geslo</label>
                            </div> <br /> <br />
                                
                            <div class="form__group field">
                                    <input type="date" class="form__field" placeholder="Datum rojstva" name="datum" id='datum' ref={birthDate} required />
                                    <label for="datum" class="form__label">Datum</label>
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
                            </div> <br /> <br /><br /> <br />

                         </form>
                        
                         <div className="hero__content__cta">
                            <Button to="/">Potrdi</Button>
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

export default Profile
