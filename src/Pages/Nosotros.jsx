import React from 'react';
import Header from "../Components/Nheader/Header.jsx";
import Somos from "../Components/quienesSomos/Somos.jsx";
import MYV from "../Components/MYV/MYV.jsx";
import Comunity from "../Components/Comunity/Comunity.jsx";
import Questions from "../Components/Questions/Quuestions.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import Contact from '../Components/Contact/Contact.jsx';

const Nosotros = () => {
    return(
        <>
            <Header />
            <section id="quienes-somos">
                <Somos />
            </section>
            <section id="mision-vision">
                <MYV />
            </section>
            <section id='contacto'>
                <Contact/>
            </section>
            <Comunity />
            <section id='questionsNosotros'>
                <Questions />
            </section>
            <Footer />
        </>
    )
}

export default Nosotros;