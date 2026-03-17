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
                        <li className="navbar__item">
                            <Link to="/#about" className="nav__link">About</Link>
                        </li>
                        <li className="navbar__item">
                            <Link to="/#projects" className="nav__link">Projects</Link>
                        </li>
                        <li className="navbar__item">
                            <Link to="/#contact" className="nav__link">Contact</Link>
                        </li>
                        <li className="navbar__item">
                            <Link to="/certificates" className="nav__link">Certificates</Link>
                        </li>
                    </ul>
                    <ThemeToggle />
                </div>
                
            </header>
        </div>
    )
}