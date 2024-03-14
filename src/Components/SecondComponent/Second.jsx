import './Second.css'
import MockupFirst from '../../Landing Page assets/IMGs/mockupFirst.svg'
import { backend } from '../../backend.js'
import notificationSound from '../../assets/Inicio_assets/notify.mp3'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AlertError from '../UI/AlertError';
import AlertSucces from '../UI/AlertSucces'

const Second = () => {
    const [correo, setCorreo] = useState('');
    const [tipoError, setTipoError] = useState('');
    const [registroCompletado, setRegistroCompletado] = useState(false);
    const [playNotification, setPlayNotification] = useState(false)
    const [isVisible, setIsVisible] = useState(false);

    const handleChangeVisibility = (visible) => {
      setIsVisible(visible);
    };

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
        <>
            <main className='body-section-2'>
                <section className='left' >
                    <div className='IMG2'>
                      <img
                        src={MockupFirst}
                        alt=""
                        className='jukebooxIMG'
                      />
                    </div>
                </section>
                <section className='right'>
                  <div className='FormularioUser'>
                    <section className='Formulario2'>
                      <div className='Text2'>
                        <p className='Bigtext'>
                          La plataforma donde <br />expresas y descubres <br />
                        </p>
                        <p className='shortText'>
                          Comparte tu música, artista y géneros <br />
                          favoritos y explora nueva música o estilos <br />
                          recomendados para ti
                        </p>
                      </div>
                      <div className='form2'>
                        <form onSubmit={handleSubmit} className='form'>
                          <input type="email" id="correo" value={correo} placeholder='tucorreo@example.com' onChange={handleCorreoChange} onKeyPress={handleKeyPress} required className='input' />
                          {tipoError && <AlertError tipoError={tipoError} />}
                          {registroCompletado && <AlertSucces />}
                          <button type="submit" className='button'>Preregístrate</button>
                        </form>
                      </div>
                    </section> 
                  </div>
                </section>
            </main>
        </>
    )
}
 
export default Second;
