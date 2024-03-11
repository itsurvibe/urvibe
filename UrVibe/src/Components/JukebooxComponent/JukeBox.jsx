import './JukeBox.css'
import JukeboxIMG from '../../assets/assetImage/JUKEBOX.svg'

const JukeBox = () => {
    return(
        <main className='body-jukebox'>
            <section className="left-jukebox">
                <div className="text-container">
                    <div className="text-container-title">
                        <p>
                            Sumérgete en las  <br />Jukeboxes
                        </p>
                    </div>
                    <div className="text-container-description">
                        <p>
                            Explora comunidades sobre distintos <br />
                            géneros, artistas, estilos y más <br />
                            Únete a las conversaciones o <br />
                            aprende sobre tus temas favoritos
                        </p>
                    </div>
                </div>
            </section>
            <section className="right-jukebox">
                <div className="IMG-JUKEBOX">
                    <img src={JukeboxIMG} alt="Imagen JukeBoox" />
                </div>
            </section>
        </main>
    )
}

export default JukeBox