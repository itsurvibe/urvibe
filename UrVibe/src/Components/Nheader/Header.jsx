import './Header.css'
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
        href: '/nosotros#questionsNosotros',
    },
];


const Header = () => {
    return(
        <main className="mainHeader">
           <section className="navBarN">
                <header className='navbar'>
                   <nav className='container-nav-footer'>
                        <section className='logoHeader'>
                            <div className='iconoHeaderNosotros'>
                                {homes.map((home, index) => (
                                    <Link key={index} to={home.href}>
                                        <img src={LogoIcon} alt="IMagen Page" />
                                    </Link>
                                ))}
                            </div>
                            <div className='logos'>
                                {homes.map((home, index) => (
                                <Link key={index} to={home.href}><Logo /></Link>
                                ))}
                            </div>
                        </section>
                        <section className='links'>
                           <div className='Nosotros'>
                                <p className='nosotrosP'>
                                    {Nosotros.map((Nosotro, index) => (
                                        <Link key={index} to={Nosotro.href}>{Nosotro.name}</Link>
                                    ))}
                                </p>
                                <p className='faqP'>
                                    <a href="#questionsNosotros">FAQ</a>
                                </p>
                            </div>
                        </section>
                    </nav> 
                </header>
            </section>
            <section className="titlePage">
               <p>
                    Nosotros
                </p>
            </section>
        </main>
    )
}

export default Header