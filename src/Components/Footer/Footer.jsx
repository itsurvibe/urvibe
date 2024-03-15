// Footer.jsx

import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import ICONO from '../../assets/Inicio_assets/iconoLogo.svg';
import Logo from '../../assets/Inicio_assets/Logo';
import Insta from '../../assets/assetImage/Social_Icons_I.svg';
import Twitter from '../../assets/assetImage/Social_Icons_T.svg';


const terminos = [
    {
      name: 'Terminos y Condiciones',
      href: '/terminos_condiciones',
    },
];


const politicas = [
    {
      name: 'Politicas',
      href: '/politicas',
    },
  ];

  const Footer = () => {

    const scrollInicio = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const scrollToPosition = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            const elementPosition = element.offsetTop;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };




    return (
        <main className='footerMain'>
            <section className="Data">
                <div className="Logo">
                    <section className='Icono-Logo'>
                        <div className='IconoF'><img src={ICONO} alt="IMAGEN ICONO" /></div>
                        <div className='Logo2'><Logo /></div>
                    </section>
                </div>
                <section className="Palabras">
                    <div className="Mapa">
                        <section className="TextNavigation">
                            <p className='Link'>Mapa</p>
                            <p className='ListWords'>
                                <Link to="/" onClick={() => scrollToPosition('inicio')}>Inicio</Link> <br />
                                <Link to="/" onClick={() => scrollToPosition('plataforma')}>Plataforma</Link> <br />
                                <Link to="/" onClick={() => scrollToPosition('jukebox')}>Jukebox</Link> <br />
                                <Link to="/" onClick={() => scrollToPosition('showYourStyle')}>Crece</Link> <br />
                                <Link to="/" onClick={() => scrollToPosition('vibesC')}>Personaliza</Link> <br />
                                <Link to="/" onClick={() => scrollToPosition('preguntas')}>FAQ</Link>
                            </p>
                        </section>
                    </div>
                    <div className="Nosotros2">
                        <section className="TextNavigation">
                            <p className='Link'>Nosotros</p>
                            <p className='ListWords'>
                                <Link to="/nosotros" onClick={() => scrollToPosition('quienes-somos')}>¿Quiénes somos?</Link> <br />
                                <Link to="/nosotros" onClick={() => scrollToPosition('mision-vision')}>Misión y visión</Link> <br />
                                <Link to="/nosotros" onClick={() => scrollToPosition('contacto')}>Contacto</Link> <br />
                                <Link to="/nosotros" onClick={() => scrollToPosition('questionsNosotros')}>FAQ</Link>
                            </p>
                        </section>
                    </div>
                        <div className="Politicas">
                            <section className="TextNavigation">
                                <p className='Link'>Políticas</p>
                                <p className='ListWords'> 
                                    <div>
                                       {terminos.map((termino, index) => (
                                            <Link key={index} to={termino.href}>{termino.name}</Link>
                                        ))}
                                    </div> 
                                    <div>
                                        {politicas.map((politica, index) => (
                                            <Link key={index} to={politica.href}>{politica.name}</Link>
                                        ))}
                                    </div>
                                </p>
                            </section>
                        </div>
                </section>
            </section>
            <section className="socialRed">
                <section className='derechos'>
                    <div className="textDerechos">
                        <p>
                            © 2023 - 2024 urVibe. Icons by <a href="https://iconos8.es/" target="_blank">Icons8 </a><br />
                            Política de Privacidad, Términos y condiciones.
                        </p>
                    </div>
                </section>
               <section className="redes_sociales">
                    <div className='ContainerImag'>
                        <a href="https://www.instagram.com/__urvibe/" target="_blank"> <img src={Insta} alt="imagen insta" /></a>
                        <a href="https://twitter.com/_urvibe" className='IMGTWITTER' target="_blank"><img src={Twitter} alt="imagen Twitter" /></a>
                    </div>
                </section>
            </section>
        </main>
    )
}

export default Footer;
