import "./Comunity.css"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { backend } from '../../backend.js'
import AlertError from '../UI/AlertError';
import AlertSucces from '../UI/AlertSucces'
import notificationSound from '../../assets/Inicio_assets/notify.mp3'
import imageList from '../../assets/assetImage/dazzle-music-app.svg'

const  Comunity = () => {
    const [correo, setCorreo] = useState('');
    const [tipoError, setTipoError] = useState('');
    const [registroCompletado, setRegistroCompletado] = useState(false);
    const [playNotification, setPlayNotification] = useState(false)
  
    useEffect(() => {
      if (playNotification) {
        const audio = new Audio(notificationSound)
        audio.play();
        setPlayNotification(false)
      }
    }, [playNotification])
  
    useEffect(() => {
      if (tipoError) {
        const timeoutId = setTimeout(() => {
          setTipoError('');
        }, 5000); 
        return () => clearTimeout(timeoutId);
      }
    }, [tipoError]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (correo.trim() === '') {
        setTipoError('correoInvalido');
        return;
      }
  
      if (!isValidEmail(correo)) {
        setTipoError('correoInvalido');
        return;
      }
  
      try {
        const response = await axios.post(backend+'/registro', { correo });
        setCorreo('');
        setTipoError('');
        setRegistroCompletado(true);
        setPlayNotification(true)
        setTimeout(() => setRegistroCompletado(false), 5000);
      } catch (error) {
        if (error.response && error.response.data) {
          if (error.response.data.mensaje === 'El correo electrónico ya está registrado') {
            setTipoError('correoExistente');
            setPlayNotification(true)
          } else {
            setTipoError('');
          }
        } else {
          setTipoError('');
        }
      }
    };
  
    const handleCorreoChange = (e) => {
      setCorreo(e.target.value);
      setTipoError('');
    };
  
    const isValidEmail = (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    };
  
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        handleSubmit(e);
      }
    };

    return(
        <main className="mainComunity">
          <section className="leftComunity">
          <div className="communityIMG">
            <img src={imageList} alt="iMAGEN VERGAS" />
          </div>
          </section>
            <section className="rightComun">
              <div className="textComunity">
                <div className="comunityTitle">
                  <p>¡Comienza a ser parte de <br /> la comunidad!</p>
                </div>
                <div className="comunitySubtitle">
                    <p>Preregistrate para tener novedades y estar <br /> dentro de las pruebas de la aplicación</p>
                </div>
                <div className="comunityForm">
                  <form onSubmit={handleSubmit} className='form'>
                      <input type="email" id="correo" value={correo} placeholder='tucorreo@example.com' onChange={handleCorreoChange} onKeyPress={handleKeyPress} required />
                      {tipoError && <AlertError tipoError={tipoError} />}
                      {registroCompletado && <AlertSucces />}
                      <button type="submit" className='button'>Preregístrate</button>
                  </form>
                </div>
                </div>
            </section>
        </main>
    )
}

export default Comunity
