import './WelcomeCard.css';
import { NavLink } from 'react-router';

function WelcomeCard() {


  return (
    <section className="welcome-card">
      <div className="welcome-container">
        
        {/* Left Side: Image */}
        <div className="welcome-image">
          <img 
            src="/logo1.png" 
            alt="TitusGames Studio" 
          />
        </div>

        {/* Right Side: Content */}
        <div className="welcome-content">
          <h1 className="welcome-title">Welcome, we are <span className="brand">TitusGames</span></h1>
          <p className="welcome-text">
            We are an independent game studio dedicated to crafting 
            unique digital experiences. From mobile puzzles to indie 
            adventures on itch.io, we build what we love.
          </p>
            <NavLink to="/about" className="read-more-btn">Read More</NavLink>
        </div>

      </div>
    </section>
  );
}

export default WelcomeCard;