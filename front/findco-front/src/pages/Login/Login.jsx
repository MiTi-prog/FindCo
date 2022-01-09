import { useContext, useRef, useState } from "react";
import { CircularProgress } from "@material-ui/core";
import "./login.scss";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = async (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );

    /*const options = {
        headers: { 'Content-Type' : 'application/json' }
    }

    const userLogin = {
      email: email.current.value,
      password: password.current.value
    }

    try {
      await axios.post('https://cors-anywhere.herokuapp.com/http://find-co.herokuapp.com/api/v1/login', userLogin) //, options
      .then((response) => {
      console.log('Success', response);
      }, (error) => {
      console.log(error);
      })
      
  } catch (err) {
      console.log(err);
  }*/
    
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">FindCo</h3>
          <span className="loginDesc">
         Prijavite se v svoj račun
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              className="loginInput"
              ref={password}
            />
            <button 
            className="loginButton" 
            type="submit"
            disabled={isFetching}
            >
                {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Prijavi se"
              )}
            </button>
            <Link to='/registracija'>
              <button className="loginRegisterButton">
              {isFetching ? (
                  <CircularProgress color="white" size="20px" />
                ) : (
                  "Ustvari račun"
                )}
              </button>
            </Link>
            
          </form>
        </div>
      </div>
    </div>
  );
}
