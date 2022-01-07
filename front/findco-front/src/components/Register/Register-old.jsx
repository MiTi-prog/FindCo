import React from 'react'
import './Register.scss';

function Register(containerRef) {
    //ref={containerRef}
    return (
        <div className="base-container" ref={containerRef}>
        <div className="header">Registracija</div>
        <div className="content">
          <div className="image">
            {/*<img src={loginImg} />*/}
          </div>
          <div className="form">
            <div className="form-group name">
              <label htmlFor="name">Ime</label>
              <input type="text" name="name" placeholder="ime" />
              <label htmlFor="last-name">Priimek</label>
              <input type="text" name="last-name" placeholder="priimek" />
            </div>
            <div className="form-group">
              <label htmlFor="birth-date">Datum rojstva</label>
              <input type="date" id="birth-date" name="trip-start" value="2000-01-01" />
              <label htmlFor="phone">Telefon</label>
              <input type="text" name="phone" placeholder="telefon" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
              <label htmlFor="password">Geslo</label>
              <input type="text" name="password" placeholder="geslo" />
            </div>
            <h3>Imate podjetje?</h3>
            <div className="form-group">
              <label htmlFor="name">Ime podjetja</label>
              <input type="text" name="name" placeholder="ime" />
              <label htmlFor="name">Ime podjetja</label>
              <input type="text" name="password" placeholder="geslo" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
      </div>
    )
}

export default Register
