// Footer.jsx

import React from 'react';
import './Footer.css';
import ICONO from '../../assets/Inicio_assets/iconoLogo.svg';
import Logo from '../../assets/Inicio_assets/Logo';
import Insta from '../../assets/assetImage/Social_Icons_I.svg';
import Twitter from '../../assets/assetImage/Social_Icons_T.svg';

const Footer = () => {
    return(
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
                                    <a href="/#inicio">Inicio</a> <br />
                                    <a href="/#plataforma">Plataforma</a> <br />
                                    <a href="/#jukebox">Jukebox</a> <br />
                                    <a href="/#showYourStyle">Crece</a> <br />
                                    <a href="/#vibesC">Personaliza</a> <br />
                                    <a href="/#preguntas">FAQ</a>
                                </p>
                            </section>
                        </div>
                        <div className="Nosotros2">
                            <section className="TextNavigation">
                                <p className='Link'>Nosotros</p>
                                <p className='ListWords'> 
                                    <a href="/nosotros#quienes-somos">¿Quiénes somos?</a> <br />
                                    <a href="/nosotros#mision-vision">Misión y visión</a> <br />
                                    <a href="/nosotros#contacto">Contacto</a> <br />
                                    <a href="/nosotros#questionsNosotros">FAQ</a>
                                </p>
                            </section>
                        </div>
                        <div className="Politicas">
                            <section className="TextNavigation">
                                <p className='Link'>Políticas</p>
                                <p className='ListWords'> 
                                    <a href="/terminos_condiciones">Términos y condiciones</a> <br />
                                    <a href="/politicas">Política de privacidad</a>
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
