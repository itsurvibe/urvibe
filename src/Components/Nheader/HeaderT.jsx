import './HeaderT.css'
import { Link } from 'react-router-dom';
import Logo from '../../assets/Inicio_assets/Logo';
import LogoIcon from '../../assets/Inicio_assets/iconoLogo.svg'


const homes = [
    {
        name: 'home',
        href: '/'
    }
]
  
const Nosotros = [
    {
        name: 'Nosotros',
        href: '/nosotros',
    },
];


const HeaderT = () => {
    return(
        <main className="mainHeaders">
            <section className="navBarNs">
                <header className='navbars'>
                <nav className='container-navs'>
                <section className='logos'>
                    <div className='iconosss'>
                        <img src={LogoIcon} alt="IMagen Page" className='IMGHEADERT' />
                    </div>
                    <div className='logoss'>
                        {homes.map((home, index) => (
                        <Link key={index} to={home.href}><Logo /></Link>
                        ))}
                    </div>
                </section>
                <section className='linkss'>
                <div className='Nosotross'>
                        <p className='nosotrosPs'>
                            {Nosotros.map((Nosotro, index) => (
                            <Link key={index} to={Nosotro.href}>Nosotros</Link>
                            ))}
                        </p>
                        <p className='faqPs'>
                            <a href="/#preguntas">FAQ</a>
                        </p>
                </div>
            </section>
        </nav> 
        </header>
            </section>
            <section className="titlePage">
                <p>
                Términos y condiciones
                </p>
            </section>
        </main>
    )
}

export default HeaderT