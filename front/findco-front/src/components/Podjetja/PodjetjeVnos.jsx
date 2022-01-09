import React, { useEffect, useRef } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./PodjetjeVnos.scss";
import Button from "../../UI/Button/Button";
import Hisa1 from "./../../assets/piseMajster.jpg";
import axios from "axios";
import { useHistory } from "react-router";
import { useContext } from "react";
import { AuthContext } from "./../../context/AuthContext";

function PodjetjaVnos() {
    // textInput must be declared here so the ref can refer to it
    const companyName = useRef();
    const taxNumber = useRef();
    const email = useRef();
    const region = useRef();
    const lineOfWork = useRef();
    const phone = useRef();
    const address = useRef();
    const city = useRef();
    const postalCode = useRef();
    const country = useRef();
    const logoPic = useRef();
    const history = useHistory();

    const { user } = useContext(AuthContext);
    const handleClick = async (e) => {
        
        const options = {
          headers: {
            'Content-Type' : 'application/json',
            'Authorization' : 'jwt ' + user.token
          } 
        };
    
        const company = {
          company_name: companyName.current.value,
          tax_number: taxNumber.current.value,
          email: email.current.value,
          line_of_work: lineOfWork.current.value,
          phone: phone.current.value,
          street_address: address.current.value,
          city: city.current.value,
          postal_code: postalCode.current.value,
          country: country.current.value,
          logo_image: logoPic.current.value
        }
    
        e.preventDefault();
        
        try {
            await axios.post('https://cors-anywhere.herokuapp.com/http://find-co.herokuapp.com/api/v1/company/add', options, company) //,options
            .then((response) => {
                console.log('Response API: ', response);
                alert('Podjetje je bilo uspešno dodano');
            }, (error) => {
                alert('Podjetje ni bilo dodano. Poskusite ponovno, ali kontaktirajte ravijalce.');
                console.log(error);
            })
            
            history.push("/");
        } catch (err) {
            console.log(err);
        }
      };
      
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
                         
                            <form onSubmit={handleClick}>

                                <div class="form__group field">
                                        <input type="input" class="form__field" placeholder="Ime Podjetja" name="imePodjetja" id='imePodjetja'  ref={companyName} required />
                                        <label class="form__label">Ime Podjetja</label>
                                </div> <br /> 

                                <div class="form__group field">
                                        <input type="input" class="form__field" placeholder="Davcna Stevilka" name="taxNumb" id='taxNumb' ref={taxNumber} required />
                                        <label class="form__label">Davčna Številka</label>
                                </div> <br /> 

                                <div class="form__group field">
                                        <input type="input" class="form__field" placeholder="Email" name="email" id='email' ref={email} required />
                                        <label class="form__label">Email</label>
                                </div> <br /> 

                                <div class="form__group field">
                                        <input type="input" class="form__field" placeholder="Telefon" name="telefon" id='telefon' ref={phone} required />
                                        <label class="form__label">Telefon</label>
                                </div> <br /> 

                                <div class="form__group field">
                                        <input type="input" class="form__field" placeholder="Naslov" name="naslov" id='naslov' ref={address} required />
                                        <label class="form__label">Naslov</label>
                                </div> <br /> 

                                <div class="form__group field">
                                        <input type="input" class="form__field" placeholder="Mesto" name="mesto" id='mesto' ref={city} required />
                                        <label class="form__label">Mesto</label>
                                </div> <br /> 


                                <div class="form__group field">
                                        <input type="input" class="form__field" placeholder="Poštna št." name="posta" id='posta'  ref={postalCode} required />
                                        <label class="form__label">Poštna št.</label>
                                </div> <br /> 

                                <div class="form__group field">
                                        <input type="input" class="form__field" placeholder="Država" name="drzava" id='drzava' ref={country} required />
                                        <label class="form__label">Država</label>
                                </div> <br /> 
                                
                                <div class="form__group field">
                                        <input type="input" class="form__field" placeholder="Regija" name="regia" id='regia' ref={region} required />
                                        <label class="form__label">Regija dela</label>
                                </div> <br /> 

                                <div class="form__group field">
                                        <input type="input" class="form__field" placeholder="Vrsta Dela" name="vrstaDela" id='vrstaDela' ref={lineOfWork} required />
                                        <label class="form__label">Vrsta Dela ki ga upravljate</label>
                                </div> <br /> 
                                
                            
                                
                                <br /><br /> <br />
                                <div className="hero__content__cta">
                                    <button type="submit">Dodaj Podjetje</button>
                                    <Button to="/learn-more" outline>
                                        Prekliči
                                    </Button>
                                </div>
                            </form>
                        
                         
                </div>
            </div>
        </div>
        <Footer />
        
        </>
    )
}

export default PodjetjaVnos
