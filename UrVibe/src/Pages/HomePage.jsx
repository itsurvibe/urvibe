import React from 'react';
import Inicio from "../Components/Inicio/Inicio.jsx";
import Second from "../Components/SecondComponent/Second.jsx";
import ThirdComponent from "../Components/ThridComponent/ThirdComponent.jsx";
import JukeBox from "../Components/JukebooxComponent/JukeBox.jsx";
import ShowyourStyle from "../Components/ShowyourStile/ShowyourStile.jsx";
import VibesC from "../Components/VibesC/VibesC.jsx";
import Comunity from "../Components/Comunity/Comunity.jsx";
import Questions from "../Components/Questions/Quuestions.jsx";
import Footer from "../Components/Footer/Footer.jsx";

export default function HomePage(){
    return(
        <>
            <section id="inicio">
                <Inicio />
            </section>
            <section id="plataforma">
                <Second />
            </section>
            <section id="tercerComponente">
                <ThirdComponent />
            </section>
            <section id="jukebox">
                <JukeBox />
            </section>
           <section id="showYourStyle">
                <ShowyourStyle />
            </section>
            <section id="vibesC">
                <VibesC />
            </section>
            <section id="comunidad">
                <Comunity />
            </section>
             <section id="preguntas">
                <Questions />
             </section>
    <Footer />
        </>
    )
}