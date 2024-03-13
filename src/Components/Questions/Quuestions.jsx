import React, { useState } from 'react';
import './Questions.css';

const Questions = () => {
    // Estado para controlar qué respuestas están desplegadas
    const [respuestasDesplegadas, setRespuestasDesplegadas] = useState({
        urVibe: false,
        funcionamiento: false,
        acciones: false,
        preregistro: false
    });


    // Función para alternar el estado de la respuesta cuando se hace clic en el botón "+"
    const toggleRespuesta = (pregunta) => {
        setRespuestasDesplegadas(prevState => ({
            ...prevState,
            [pregunta]: !prevState[pregunta]
        }));
    };

    return (
        <main className='mainQuestions'>
            <div className='bodyQuestions'>
                <section className='QuestionsSec'>
                   <div className="containerElements">
                        <section className="Title">
                            <p>Preguntas Frecuentes</p>
                        </section>
                        <section className='buttonsQuestions'>
                            <div className={`styleQuestions ${respuestasDesplegadas.urVibe ? 'desplegado' : ''}`}>
                                <div className="text">
                                    <p className='titleQ'>
                                        ¿Qué es urVibe?
                                    </p>
                                    {respuestasDesplegadas.urVibe && (
                                        <p className='answer'>urVibe será una red social diferente, donde tod@s <br />
                                        pueden mostrar su estilo a través de la música, interesés, <br />
                                        opiniones y conocimientos, fomentando la formación en <br />
                                        el arte, el descubrimirnto de nuevas experiencias <br />
                                        musicales y el apoyo artistico entre comunidades. <br />
                                        urVibe estará disponible para Android y iOS.</p>
                                    )}
                                </div>
                                <div className="buttonQ">
                                    <button className='buttonQuestion' onClick={() => toggleRespuesta('urVibe')}>
                                        {respuestasDesplegadas.urVibe ? '-' : '+'}
                                    </button>
                                </div>
                            </div>
                            <div className={`styleQuestions ${respuestasDesplegadas.funcionamiento ? 'desplegado' : ''}`}>
                                <div className="text">
                                    <p className='titleQ'>
                                        ¿Cómo funcionará urVibe?
                                    </p>
                                    {respuestasDesplegadas.funcionamiento && (
                                        <p className='answer'>
                                            Los usuarios de urVibe personalizan su perfil acorde a sus <br />
                                            gustos musicales e intereses. Asi encontrarán <br />
                                            comunidades relacionadas en las cuales pueden ser <br />
                                            miembros. <br />
                                            La plataforma contará herramientas modernas para crear <br />
                                            y difundir contenido. <br />
                                            Ademas los usuarios podrán conectar y comunicarse con <br />
                                            otros usuarios usando la sección de mensaje directo.
                                        </p>
                                    )}
                                </div>
                                <div className="buttonQ"> 
                                    <button className='buttonQuestion' onClick={() => toggleRespuesta('funcionamiento')}>
                                        {respuestasDesplegadas.funcionamiento ? '-' : '+'}
                                    </button>
                                    </div>
                            </div>
                            <div className={`styleQuestions ${respuestasDesplegadas.acciones ? 'desplegado' : ''}`}>
                                <div className="text">
                                    <p className='titleQ'>
                                        ¿Qué podré hacer en urVibe?
                                    </p>
                                    {respuestasDesplegadas.acciones && (
                                        <p className='answer'>
                                            Como usuario únete a Jukeboxes (comunidades) donde <br />
                                            podrás: <br />
                                            -Compartir tus creaciones musicales, darte a conocer o aprender de otros. <br />
                                            -Descubrir nueva música según tus preferencias. <br />
                                            compartiendo playlist o pidiendo recomendaciones. <br />
                                            -Seguir y conectar con otros usuarios o artistas emergentes que te gusten. 
                                        </p>
                                    )}
                                </div>
                                <div className="buttonQ">
                                    <button className='buttonQuestion' onClick={() => toggleRespuesta('acciones')}>
                                        {respuestasDesplegadas.acciones ? '-' : '+'}
                                    </button>
                                </div> 
                            </div>    
                            <div className={`styleQuestions ${respuestasDesplegadas.preregistro ? 'desplegado' : ''}`}>
                               <div className="text">
                                    <p className='titleQ'>
                                        ¿Cómo me preregistro urVibe?
                                    </p>
                                    {respuestasDesplegadas.preregistro && (
                                        <p className='answer'>
                                            El preregistro está disponible ahora mismo. <br />
                                            Preregistrate aqui. Solo necesitamos tu correo <br />
                                            electrónico y te notificaremos cuando urVibe este <br />
                                            disponible en tu tienda de aplicaciones ¡y ya estarás <br />
                                            listo, para conectar con la comunidad de la música! <br /><br />

                                            La privacidad y uso de tus datos se adhieren a nuestra <br />
                                            Politica de privacidad y uso de datos.
                                        </p>
                                    )}
                                </div>
                                <div className="buttonQ">
                                    <button className='buttonQuestion' onClick={() => toggleRespuesta('preregistro')}>
                                        {respuestasDesplegadas.preregistro ? '-' : '+'}
                                    </button>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Questions;
