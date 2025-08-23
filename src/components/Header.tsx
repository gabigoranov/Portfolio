import '../assets/styles/header.css'

export default function Header() {
    return (
        <header>
            <span className="logo">Gabriel</span>
            <ul className="navbar">
                <li className="navbar__item">About</li>
                <li className="navbar__item">Projects</li>
                <li className="navbar__item">Contact</li>
            </ul>
        </header>
    )
}