import './Contact.css'

import Insta from '../../assets/assetImage/Social_Icons_I.svg';
import Twitter from '../../assets/assetImage/Social_Icons_T.svg';
import User from '../../assets/assetImage/User.svg'

const Contact = () => {
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
                            <a href="https://www.instagram.com/__urvibe/" target="_blank"> <img src={Insta} alt="imagen insta" className='SocialRedIMG' /></a>
                        </div>
                        <div className="redSocials">
                            <p>
                               @__urvibe
                            </p>
                        </div>   
                    </div>
                    <div className="apartadosSocioales">
                        <div className="IMGSocial">
                        <a href="https://twitter.com/_urvibe" className='IMGTWITTER' target="_blank"><img src={Twitter} alt="imagen Twitter" className='SocialRedIMG' /></a>
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