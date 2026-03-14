import { NavLink } from 'react-router';
import './FeatureCard.css';

function FeatureCard({ title, description, image, buttonText, buttonLink, reverse }) {
  
  // Logic to determine how to render the button
  const renderButton = () => {
    if (!buttonText) return null; // Don't render anything if there's no text

    // Check if it's an external link (like itch.io or Play Store)
    const isExternal = buttonLink?.startsWith('http');

    if (isExternal) {
      return (
        <a href={buttonLink} target="_blank" rel="noopener noreferrer" className="feature-btn">
          {buttonText}
        </a>
      );
    }

    // Otherwise, use internal React Router Link
    return (
      <NavLink to={buttonLink || '#'} className="feature-btn">
        {buttonText}
      </NavLink>
    );
  };

  return (
    <section className={`feature-card ${reverse ? 'row-reverse' : ''}`}>
      <div className="feature-container">
        <div className="feature-image">
          <img src={image} alt={title} />
        </div>

        <div className="feature-content">
          <h2 className="feature-title">{title}</h2>
          <p className="feature-text">{description}</p>
          {renderButton()}
        </div>
      </div>
    </section>
  );
}

export default FeatureCard;