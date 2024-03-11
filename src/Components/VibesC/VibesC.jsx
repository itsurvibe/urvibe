import './VibesC.css'
import vibeIMG from '../../assets/assetImage/vibe.svg'
import { backend } from '../../backend.js'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AlertError from '../UI/AlertError';
import AlertSucces from '../UI/AlertSucces'
import notificationSound from '../../assets/Inicio_assets/notify.mp3'


const VibesC = () => {
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
      <main className="mainVibes">
        <section className="vibesLeft">
          <section className="vibeContainer">
            <div className="vibeTitle"><p>Personaliza tus vibes</p></div>
            <div className="vibeDescription"><p>Crea un perfil único con tu <br /> estilo personal. <br /> Encuentra y conoce personas que <br />compartan tus mismos gustos y “vibes”</p></div>
              <div className="vibeFormulario">
                <form onSubmit={handleSubmit} className='form'>
                  <input type="email" id="correo" value={correo} placeholder='tucorreo@example.com' onChange={handleCorreoChange} onKeyPress={handleKeyPress} required />
                  {tipoError && <AlertError tipoError={tipoError} />}
                  {registroCompletado && <AlertSucces />}
                  <button type="submit" className='button'>Preregístrate</button>
                </form>
              </div>
          </section>
        </section>
            <section className="vibesRight">
              <div className="vibeIMG">
                <img src={vibeIMG} alt="Imagen Kabrona" />
              </div>
            </section>
      </main>       
    )
}

export default VibesC
