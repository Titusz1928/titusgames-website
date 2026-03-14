import './GamesGrid.css';
import { useNavigate } from 'react-router';
import { gamesData } from '../data/games'; // Import the central data
import controllerIcon from '../assets/images/icons/controller.png'; // Best to import icons too

function GamesGrid() {
  const navigate = useNavigate();

  return (
    <section className="games-grid-section">
      <div className="section-header">
        <img src={controllerIcon} alt="Icon" className="section-icon" />
        <h2 className="section-title">Our Games</h2>
      </div>

      <div className="grid-container">
        {gamesData.map((game) => (
          <div 
            key={game.id} 
            className="game-card-mini"
            onClick={() => navigate(`/game/${game.id}`)}
          >
            <div className="image-wrapper">
              <img src={game.image} alt={game.title} />
              <div className="overlay">
                <span>View Details</span>
              </div>
            </div>
            <h3>{game.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GamesGrid;