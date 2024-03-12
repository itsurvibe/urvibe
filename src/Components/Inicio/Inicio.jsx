import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AlertError from '../UI/AlertError';
import AlertSucces from '../UI/AlertSucces'
import { Link } from 'react-router-dom';
import Logo from '../../assets/Inicio_assets/Logo';
import LogoIcon from '../../assets/Inicio_assets/iconoLogo.svg'
import FirstHeader from '../../assets/Inicio_assets/FirstHeader.svg'
import notificationSound from '../../assets/Inicio_assets/notify.mp3'
import './Inicio.css';




const homes = [
  {
    name: 'home',
    href: '/'
  }
]

const links = [
  {
    name: 'Nosotros',
    href: '/nosotros',
  },
];


function Inicio() {
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
      const response = await axios.post('https://backend-ebon-three.vercel.app/api/registro', { correo });
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
  {/**/}

  return (
    <main className='body-main'>
      <div className="left-column" >
       <section className='navbarInicio'>
          <nav className='container-navInicio'>
              <section className='logoInicio'>
                 <div className='iconoInicio'>
                  <img src={LogoIcon} alt="IMagen Page" />
                </div>
                <div className='logosInicio'>
                  {homes.map((home, index) => (
                    <Link key={index} to={home.href}><Logo /></Link>
                  ))}
                </div>
              </section>
              <section className='linksInicio'>
                <div className='NosotrosInicio'>
                  {links.map((link, index) => (
                    <Link key={index} to={link.href}>{link.name}</Link>
                  ))}
                </div>
                <div className='FAQINICIO'>
                  <a href="#preguntas">FAQ</a>
                </div>
              </section>
            </nav>
        </section>
        <section className='contentInicio'>
          <section className='TextInicio'>
              <div className='textComunityInicio'>
                <p className='textContent'> 
                  Comunidades donde <br />
                  conectan, crean y descubren <br />
                  su estilo con la música
                </p>
              </div>
          </section>
          <section className='registerInicio'>
               <div className='FormularioInicio'>
                <form onSubmit={handleSubmit} className='formInicio'>
                  <input type="email" id="correo" value={correo} placeholder='tucorreo@example.com' onChange={handleCorreoChange} onKeyPress={handleKeyPress} required />
                  {tipoError && <AlertError tipoError={tipoError} />}
                  {registroCompletado && <AlertSucces />}
                  <button type="submit" className='buttonInicio'>Preregístrate</button>
                </form>
              </div>
          </section>
        </section>
      </div>
      <div className="right-column">
        <section className='imgInicio'>
          <img src={FirstHeader} alt="Imagen Header"  className='oculatr'/>
        </section>
      </div>
    </main>
  );
}

export default Inicio;
