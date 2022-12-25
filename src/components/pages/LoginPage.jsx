import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../../styles/Login.css"
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import { authContext } from '../contexts/authContext';



const LoginPage = () => {
    const navigate = useNavigate();

    const {handleLogin } = useContext(authContext);
    const [logInpValue, setLogInpValue] = useState("");
    const [passwordInpValue, setPasswordInpValue] = useState("");

    function snackbar_error() {
      var x = document.getElementById("snackbar_error");
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }

    function loginUser() {
      if(!logInpValue.trim() || !passwordInpValue.trim()){
        snackbar_error()
        return;
      };
      let formData = new FormData();
      formData.append('email', logInpValue);
      formData.append('password', passwordInpValue);
      handleLogin(formData, logInpValue, navigate);
    };

   
  return (
    <>
    <div className='fon' style={{background:"none"}}>
        <div className="login-form">
            <button className='close' style={{ left: '368px', top: '8px', border:'none', background:'none' }}
              onClick={() => navigate("/")}>
              <CloseIcon    />
            </button>
      
        <h2 className='title-vhod'>Вход</h2>
        <p className='title-email'>Почта или телефон:</p>
        <input type="text" className='inp-email-voiti' placeholder='Введите почту' value={logInpValue} onChange={e => setLogInpValue(e.target.value)}/>
        <p className='title-password-voiti'>Пароль:</p>
        <input type="text" className='inp-password-voiti' placeholder='Введите пароль' value={passwordInpValue} onChange={e => setPasswordInpValue(e.target.value)}/>
        <a className='forgot-pass' href="/rest">Забыли пароль?</a>
        <button className='voiti-btn' onClick={loginUser}>Войти</button>
        <p className='title-qu'>Еще не зарегистрированы?</p>
        <button className='register-btn' onClick={() => navigate("/register")}>Регистрация</button>
        <div id="snackbar">Вы успешно вошли в систему!</div>
        <div id="snackbar_error">Неправильные данные!</div>
     </div>
     </div>
     </>
  )
}

export default LoginPage;