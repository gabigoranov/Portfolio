import '../assets/styles/header.css'

export default function Header() {
    return (
        <header>
            <span className="logo">Gabriel</span>
            <ul className="navbar">
                <li className="navbar__item"><a className='nav__link' href='#about'>About</a></li>
                <li className="navbar__item"><a className='nav__link' href='#projects'>Projects</a></li>
                <li className="navbar__item"><a className='nav__link' href="#contact">Contact</a></li>
            </ul>
        </header>
    )
}