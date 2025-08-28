import { FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";
import '../assets/styles/footer.css';
import { MdOutlinePhone } from "react-icons/md";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer card">
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
          <a href="tel:+359896583578" aria-label="Phone">
            <MdOutlinePhone />
          </a>
          <a href="https://instagram.com/gabi.goranov" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
