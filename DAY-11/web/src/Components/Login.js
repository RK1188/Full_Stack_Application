import React, { useEffect, useState, useRef } from 'react';
import '../Components/Login.css';
import './Login.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import bcrypt from 'bcryptjs';

const LoginForm = () => {
  const [user, setName] = useState('');
  const [mail, setMail] = useState('');
  const [number, setNumber] = useState('');
  const [pass, setPass] = useState('');
  const [popupMessage, setPopupMessage] = useState('');
  const signInButtonRef = useRef(null);

  const handleChangeName = (e) => {
    const value = e.target.value;
    setName(value);
  };

  const handleChangeNumber = (e) => {
    const value = e.target.value;
    setNumber(value);
  };

  const handleChangeMail = (e) => {
    const value = e.target.value;
    setMail(value);
  };

  const handleChangePass = (e) => {
    const value = e.target.value;
    setPass(value);
  };

  useEffect(() => {
    const sign_in_btn = document.querySelector('#sign-in-btn');
    const sign_up_btn = document.querySelector('#sign-up-btn');
    const container = document.querySelector('.container');

    sign_up_btn.addEventListener('click', () => {
      container.classList.add('sign-up-mode');
    });

    sign_in_btn.addEventListener('click', () => {
      container.classList.remove('sign-up-mode');
    });
    signInButtonRef.current = sign_in_btn;
  }, []);

  const handleSign = (e) => {
    e.preventDefault();

    const encryptedPassword = bcrypt.hashSync(pass, 10); 

    const data = {
      email: mail,
      mobilenumber: number,
      name: user,
      password: encryptedPassword,
    };

    axios
      .post('http://127.0.0.1:8080/post', data)
      .then((response) => {
        setPopupMessage(response.data);
      })
      .catch((error) => {
        console.log(error);
        setPopupMessage('Error occurred during registration');
      });
  };

  const handlePopupClose = () => {
    setPopupMessage('');
    if (popupMessage === 'Registered Successfully') {
      signInButtonRef.current.click();
    }
  };

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form" onSubmit={handleSign}>
            <h2 className="title">Sign In</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input required type="email" placeholder="Email" value={mail} onChange={handleChangeMail} />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input required type="password" placeholder="Password" value={pass} onChange={handleChangePass} />
            </div>
            <Link to="/home">
              <input type="submit" value="Login" className="btn solid" />
            </Link>
          </form>
          <form action="#" className="sign-up-form" onSubmit={handleSign}>
            <h2 className="title" >Sign Up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input required type="text" placeholder="Name" value={user} onChange={handleChangeName} />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input required type="email" placeholder="Email" value={mail} onChange={handleChangeMail} />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input required type="mobilenumber" placeholder="Mobile Number" value={number} onChange={handleChangeNumber} />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input required type="password" placeholder="Password" value={pass} onChange={handleChangePass} />
            </div>
            <input type="submit" className="btn" value="Sign up" />
          </form>
        </div>
        {popupMessage && (
          <div className="popupContainer">
            <div className="popup">
              <p>{popupMessage}</p>
              <button className="popupClose" onClick={handlePopupClose}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>Enter your personal details and start the journey with us</p>
            <button className="btn transparent" id="sign-up-btn">
              Sign Up
            </button>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>To keep connected with us please login with your personal info</p>
            <button className="btn transparent" id="sign-in-btn">
              Sign In
            </button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;