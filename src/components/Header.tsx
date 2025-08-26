import { useEffect, useState } from 'react';
import '../assets/styles/header.css'

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
                <ul className="navbar">
                    <li className="navbar__item"><a className='nav__link' href='#about'>About</a></li>
                    <li className="navbar__item"><a className='nav__link' href='#projects'>Projects</a></li>
                    <li className="navbar__item"><a className='nav__link' href="#contact">Contact</a></li>
                </ul>
            </header>
        </div>
    )
}