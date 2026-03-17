import { useEffect, useState } from 'react';
import '../assets/styles/header.css'
import ThemeToggle from './ThemeToggle';
import { Link } from 'react-router-dom';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
       const checkScroll = () => setScrolled(window.scrollY > 60);

        checkScroll(); // run once on mount to handle page refresh at any scroll position
        window.addEventListener("scroll", checkScroll);
        return () => window.removeEventListener("scroll", checkScroll);
    }, []);

    return (
        <div className='header-container'>
            <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
                <span className="logo">Gabriel</span>
                <div className='header__navbar-container'>
                    <ul className="navbar">
                        <Link to="/#about"><li className="navbar__item nav__link">About</li></Link>
                        <Link to="/#projects"><li className="navbar__item nav__link">Projects</li></Link>
                        <Link to="/#contact"><li className="navbar__item nav__link">Contact</li></Link>
                        <Link to="/certificates"><li className="navbar__item nav__link">Certificates</li></Link>
                    </ul>
                    <ThemeToggle />
                </div>
                
            </header>
        </div>
    )
}