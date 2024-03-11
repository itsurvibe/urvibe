import './Style.css'
import ShowMockup from '../../assets/assetImage/show.svg'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AlertError from '../UI/AlertError';
import AlertSucces from '../UI/AlertSucces'
import notificationSound from '../../assets/Inicio_assets/notify.mp3'

const ShowyourStyle = () => {

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
        const response = await axios.post('http://localhost:3000/registro', { correo });
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
        <main className='show-body'>
          <section className='show-left'>
            <div className='show-IMG'>
                <img src={ShowMockup} alt="Imagen Mockup" />
            </div>
          </section>
            <section className='show-right'>
              <div className="showText">
                  <div className="showTitle">
                    <p>
                        Muestra tu estilo y <br />crece con la comunidad
                    </p>
                  </div>
                  <div className="showSubtitle">
                    <p>
                      Comparte tu propia música, encuentra <br />inspiración y apoya el talento emergente
                    </p>
                  </div>
                  <div className="showForm">
                    <form onSubmit={handleSubmit} className='form'>
                      <input type="email" id="correo" value={correo} placeholder='tucorreo@example.com' onChange={handleCorreoChange} onKeyPress={handleKeyPress} required />
                      {tipoError && <AlertError tipoError={tipoError} />}
                      {registroCompletado && <AlertSucces />}
                      <button type="submit">Preregístrate</button>
                    </form>
                    </div>
              </div>
            </section>
        </main>
    )
}

export default ShowyourStyle