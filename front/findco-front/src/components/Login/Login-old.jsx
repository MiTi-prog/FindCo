import React from 'react';
import '../Register/Register.scss';

function Login() {

//ref={containerRef}
    return (
      <form className="loginBox">
        <div className="base-container" >
        <div className="header">Prijava</div>
        <div className="content">
          <div className="image">
            {/*<img src={loginImg} />*/}
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Email</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Geslo</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Prijavi se
          </button>
        </div>
      </div>
    </form>
    )
};

export default Login;