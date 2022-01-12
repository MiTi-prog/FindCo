import axios from "axios";
import { useRef } from "react";
import "./register.scss";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export default function Register() {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();
  const birthDate = useRef();
  const phone = useRef();
  const address = useRef();
  const city = useRef();
  const postalCode = useRef();
  const country = useRef();
  const history = useHistory();
  const passwordAgain = useRef();

  const handleClick = async (e) => {
    /*const options = {
      headers: {
        'Access-Control-Allow-Origin' : '*',
        'Content-Type' : 'application/json'
      }
    };*/

    const user = {
      first_name: firstName.current.value,
      last_name: lastName.current.value, 
      email: email.current.value,
      password: password.current.value,
      date_birth: birthDate.current.value,
      phone: phone.current.value,
      street_address: address.current.value,
      city: city.current.value,
      postal_code: postalCode.current.value,
      country: country.current.value,
      role: 'admin',
    }

    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Gesli se ne ujemata!");
    } else {
      try {
        await axios.post('https://cors-anywhere.herokuapp.com/http://find-co.herokuapp.com/api/v1/register', user) //,options
        .then((response) => {
          console.log('Response API: ', response);
          alert('Registracija je bila uspešna');
        }, (error) => {
          alert('Registracija ni bila uspešna. Prosim poskusite ponovno.');
          console.log(error);
        })
        
        history.push("/prijava");
      } catch (err) {
        
        console.log(err);
        
      }
    }
  };

  return (
    <div className="registration">
      <div className="registrationWrapper">
        <div className="registrationLeft">
          <h3 className="registrationLogo">FindCo</h3>
          <span className="registrationDesc">
          Ustvarite nov račun
          </span>
        </div>
        <div className="registrationRight">
          <form className="registrationBox" onSubmit={handleClick}>
            <input
              placeholder="Ime"
              required
              ref={firstName}
              className="registrationInput"
            />
            <input
              placeholder="Priimek"
              required
              ref={lastName}
              className="registrationInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="registrationInput"
              type="email"
            />
            <input
              placeholder="Geslo"
              required
              ref={password}
              className="registrationInput"
              type="password"
            />
            <input
              placeholder="Ponovi geslo"
              required
              ref={passwordAgain}
              className="registrationInput"
              type="password"
            />
            <input
              placeholder="Datum rojstva"
              required
              ref={birthDate}
              className="registrationInput"
              type="date"
            />
            <input
              placeholder="Telefon"
              required
              ref={phone}
              className="registrationInput"
              type="number"
            />
            <input
              placeholder="Naslov"
              required
              ref={address}
              className="registrationInput"
              type="text"
            />
            <input
              placeholder="Mesto"
              required
              ref={city}
              className="registrationInput"
              type="text"
            />
            <input
              placeholder="Poštna št."
              required
              ref={postalCode}
              className="registrationInput"
              type="number"
            />
            <input
              placeholder="Država"
              required
              ref={country}
              className="registrationInput"
              type="text"
            />
            
            <button className="registrationButton" type="submit">
              Registriraj se
            </button>
            <Link to='/prijava'>
              <button 
              className="loginRegisterButton"
              >
                Prijava
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
