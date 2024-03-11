import './ThridComponent.css'
import group from '../../assets/assetThrid/account-group.svg'
import libro from '../../assets/assetThrid/account-music.svg'
import music from '../../assets/assetThrid/library.svg'

const ThirdComponent = () => {
    return(
        <main className="body-section-3">
            <nav className='Title-3'>
                <p className='Title-p'>
                    Un espacio libre con urVibe
                </p>
            </nav>
            <section className='sections-3'>
                <aside className='aside-1'>
                  <section className='img-3'>
                       <div className='avatar-1'>
                            <div className="group1Avatar">
                                <div className='containerImg-1'>
                                    <img src={group} alt="ConteinerGuop" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className='titulo'>
                        <div className="containerText-3">
                            <p>
                                Conoce
                            </p>
                        </div>
                    </div>
                    <div className='subtitulo'>
                        <div className='subtitle'>
                            <p>
                                Conecta con personas, escucha <br /> o apoya a artistas nuevos
                            </p>
                        </div>
                    </div>
                </aside>
                <aside className='aside-2'>
                   <div className='img-4'>
                        <div className='avatar-2'>
                            <img src={libro} alt="" />
                        </div>
                    </div>
                    <div className='titulo-aside2'>
                        <p>
                            Expresa
                        </p>
                    </div>
                    <div className='subtituloaside2'>
                        <p >
                            Unete a comunidades donde puedes <br /> compartir lo que escuchas o tu música
                        </p>
                    </div>
                </aside>
                <aside className='aside-3'>
                   <div className='img-3'>
                        <div className='avatar-3'>
                           <div className="group3Avatar">
                                <div className="containerIMG3">
                                    <img src={music} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='titulo'>
                        <div className="conatinerText3">
                            <p className='Text-5'>
                                Aprende
                            </p>
                        </div>
                    </div>
                    <div className='subtitulo'>
                        <div className="containerSubtitulo3">
                            <p className='subtitle-3'>
                                Llénate de conocimiento en las comunidades <br /> dedicadas a temas relacionados
                            </p>
                        </div>
                    </div>
                </aside>
            </section>
        </main>
    )
}

export default ThirdComponent