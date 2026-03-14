import { NavLink } from 'react-router';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="footer-logo">Titus<span>Games</span></h2>
          <p>Creating indie experiences with passion.</p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><NavLink to="/games">Our Games</NavLink></li>
            <li><NavLink to="/about">About TitusGames</NavLink></li>
            <li><NavLink to="/privacy/general">Privacy Policy</NavLink></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>Email: titusgames.studios@gmail.com</p>
          <div className="social-placeholders">
            <span>LinkedIn</span> • <span>Itch.io</span> • <span>Github</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {currentYear} TitusGames | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;