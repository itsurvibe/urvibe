import './Contact.css'

import Insta from '../../assets/assetImage/Social_Icons_I.svg';
import Twitter from '../../assets/assetImage/Social_Icons_T.svg';
import User from '../../assets/assetImage/User.svg'

const Contact = () => {

    function openLink(event) {
        // Verifica si el dispositivo es móvil
        var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        
        // Si es móvil, cancela el comportamiento predeterminado (abrir en una nueva ventana)
        if (isMobile) {
            event.preventDefault();
        }
        
        // Abre el enlace en una nueva ventana solo si no es un dispositivo móvil
        if (!isMobile) {
            window.open(event.currentTarget.href, '_blank');
        }
    }
    return(
        <main className="mainContact">
            <section className="LeftPart">
                <div className='TEXTCONTACT'>
                    <p>
                        Contáctanos
                    </p>
                </div>
            </section>
            <section className="ContactUS">
                <section className="ContenedorContact">
                    <div className="apartadosSocioales">
                       <div className="IMGSocial">
                            <img src={User} alt=""  className='SocialRedIMG'/>
                        </div>
                        <div className="redSocials">
                            <p>
                                its.urvibe.app@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="apartadosSocioales">
                        <div className="IMGSocial">
                            <a href="https://www.instagram.com/__urvibe/" target='balnk'> 
                                <img src={Insta} alt="imagen insta" className='SocialRedIMG'/>
                            </a>
                        </div>
                        <div className="redSocials">
                            <p>
                               @__urvibe
                            </p>
                        </div>   
                    </div>
                    <div className="apartadosSocioales">
                        <div className="IMGSocial">
                        <a href="https://twitter.com/_urvibe" className='IMGTWITTER' target="blank"><img src={Twitter} alt="imagen Twitter" className='SocialRedIMG' /></a>
                        </div>
                        <div className="redSocials">
                            <p>
                                @_urvibe
                            </p>
                        </div>
                    </div>
                </section>
            </section>
        </main> 
    )
}

export default Contact