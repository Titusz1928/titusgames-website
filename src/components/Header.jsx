import {NavLink} from 'react-router';
import './Header.css';

export function Header() {
    return (
        <>
            <div className="header">
                <div className="left-section">
                    <NavLink to="/" className="header-link">
                        <img className="logo"
                            src="/logo3.png" />
                        <img className="mobile-logo"
                            src="/logo4.png" />
                    </NavLink>
                </div>

                {/* <div className="middle-section">
                    <input className="search-bar" type="text" placeholder="Search"/>
                    <button className="search-button">
                        <img className="search-icon" src="/src/assets/images/icons/search-icon.png" />
                    </button>
                </div> */}

                <div className="right-section">
                    <NavLink className="about-link header-link" to="/about">

                        <span className="about-text">About</span>
                    </NavLink>

                    <NavLink className="projects-link header-link" to="/games">
                        <img className="projects-icon" src="/src/assets/images/icons/controller.png" />
                        <div className="projects-text">Games</div>
                    </NavLink>
                </div>
            </div>
        </>
    );
}