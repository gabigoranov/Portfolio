import { useEffect, useState } from 'react';
import '../assets/styles/header.css'

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
        setScrolled(window.scrollY > 60); // activate when scrolled past 50px
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (
        <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
            <span className="logo">Gabriel</span>
            <ul className="navbar">
                <li className="navbar__item"><a className='nav__link' href='#about'>About</a></li>
                <li className="navbar__item"><a className='nav__link' href='#projects'>Projects</a></li>
                <li className="navbar__item"><a className='nav__link' href="#contact">Contact</a></li>
            </ul>
        </header>
    )
}