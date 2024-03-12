import './Somos.css'

import Martin from '../../assets/creators/Eduardo.svg'
import Eduardo from '../../assets/creators/Martin.svg'
import Oscar from '../../assets/creators/Oscar_Diaz.svg'
import Joab from '../../assets/creators/Joab.svg'
import Miguel from '../../assets/creators/Miguel.jpg'

const Somos = () => {
    return(
        <main className="mainSomos">
            <section className="textSomos">
                <p className='titleSomos'>
                    ¿Quiénes somos?
                </p>
                <p className='descriptionSomos'>
                    Somos un equipo dedicado, responsable y ambicioso estamos aprendiendo dia a <br />
                    dia y mejorando nuestras habilidades, como estudiantes universitarios tomamos en <br />
                    cuenta la importancia del arte y la música en cada persona y el impacto que esta <br />
                    yace en la vida de muchos otros, identificando cualquier sector de la población su neceidad de expresarse, opinar y desarrollar su creatividad.
                </p>
            </section>
            <section className="cardUs">
                <div className='CARTAS'>
                    <div className='containerC1'>
                        <section className="creator1">
                            <div className="cardM">
                                <div className='IMGM'>
                                    <img src={Eduardo} alt="Eduardo" />
                                </div>
                                <div className='TextM'>
                                    <div className="NombreM">
                                        <p>
                                            Eduardo Briseño
                                        </p>
                                    </div>
                                    <div className="puestoM">
                                        <p>
                                            Técnico Superior Universitario <br />
                                            en Sistemas Informáticos <br />
                                            UI/UX Designer
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="creator2">
                           <div className="cardM">
                                <div className='IMGM'>
                                    <img src={Oscar} alt="Oscar" />
                                </div>
                                <div className='TextM'>
                                    <div className="NombreM">
                                        <p>
                                            Oscar Diaz
                                        </p>
                                    </div>
                                    <div className="puestoM">
                                        <p>
                                            Técnico Superior Universitario <br />
                                            en Sistemas Informáticos
                                        </p>
                                    </div>
                                </div>
                            </div>                            
                        </section>
                    </div>

                     <div className='containerC2'>
                        <section className="creator3">
                            <div className="cardM">
                                <div className='IMGM'>
                                    <img src={Martin} alt="Martin" />
                                </div>
                                <div className='TextM'>
                                    <div className="NombreM">
                                        <p>
                                            Martin Hernández
                                        </p>
                                    </div>
                                    <div className="puestoM">
                                        <p>
                                            Técnico Superior Universitario <br />
                                            en Sistemas Informáticos <br />
                                            Desarrollador Web Fullstack
                                        </p>
                                    </div>
                                </div>
                            </div>                            
                        </section>
                       <section className="creator4">
                            <div className="cardM">
                                <div className='IMGM'>
                                    <img src={Joab} alt="Joab" />
                                </div>
                                <div className='TextM'>
                                    <div className="NombreM">
                                        <p>
                                            Joab Ramirez
                                        </p>
                                    </div>
                                    <div className="puestoM">
                                        <p>
                                            Técnico Superior Universitario <br />
                                            en Sistemas Informáticos <br />
                                            Investigador
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section> 
                        <section className="creator5">
                            <div className="cardM">
                                <div className='IMGM'>
                                    <img src={Miguel} alt="Miguel" />
                                </div>
                                <div className='TextM'>
                                    <div className="NombreM">
                                        <p>
                                            Miguel Camarena
                                        </p>
                                    </div>
                                    <div className="puestoM">
                                        <p>
                                            Ingenieria en Robotica <br />
                                            Full Stack Web Designer
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section> 
                    </div>                                
                </div>
            </section>
        </main>
    )
}

export default Somos