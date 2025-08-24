import { FaGithub, FaEnvelope } from "react-icons/fa";
import '../assets/styles/footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__copy">© {year} Gabriel Goranov. All rights reserved.</p>

        <div className="footer__socials">
          <a
            href="https://github.com/gabigoranov"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a href="mailto:gabi.goranov.work@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
