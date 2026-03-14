import { useParams, NavLink } from 'react-router';
import { gamesData } from '/src/data/games';
import { useEffect, useState } from 'react';
import './GameDetail.css';
import { Header } from '../../components/Header';
import Footer from '../../components/Footer';

function GameDetail() {
  const { gameId } = useParams();
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [gameId]);

  useEffect(() => {
    if (selectedImg) {
      document.body.style.overflow = 'hidden'; // Stop background scrolling
    } else {
      document.body.style.overflow = 'unset'; // Resume scrolling
    }
  }, [selectedImg]);

  // Find the specific game in our data array
  const game = gamesData.find(g => g.id === gameId);

  // If game doesn't exist (e.g. user types a fake ID)
  if (!game) return <div className="error">Game not found!</div>;

  return (
    <>
      <Header />

      <div className="game-detail-page">
        {/* Header Section */}
        <div className="game-header-section">
          <h1>{game.title}</h1>
          <div className="tags-container">
            {game.tags?.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        {/* Info Section (Now primarily for text/links) */}
        <div className="game-info-grid">
          <div className="description-col">
            <h3>About the Game</h3>
            <p>{game.description}</p>

            {(game.storeLinks?.itch || game.storeLinks?.playstore || game.privacyLink) && (
              <div className="links-section">
                <h4>Links</h4>
                {game.storeLinks?.itch && (
                  <a href={game.storeLinks.itch} target="_blank" rel="noopener noreferrer" className="store-link">
                    Play on Itch.io
                  </a>
                )}
                {game.storeLinks?.playstore && (
                  <a href={game.storeLinks.playstore} target="_blank" rel="noopener noreferrer" className="store-link">
                    Get it on Google Play
                  </a>
                )}
                {game.privacyLink && (
                  <a href={game.privacyLink} className="privacy-link">
                    Privacy Policy
                  </a>
                )}
              </div>
            )}

            {/* NEW: Updates Section */}
            {game.updates && game.updates.length > 0 && (
              <div className="updates-col">
                <h3>Latest Updates</h3>
                <div className="updates-list">
                  {game.updates.map((update) => (
                    <NavLink
                      key={update.id}
                      to={`/game/${game.id}/update/${update.id}`}
                      className="update-item-link"
                    >
                      <div className="update-item">
                        <span className="update-date">{update.date}</span>
                        <span className="update-title">{update.title}</span>
                      </div>
                    </NavLink>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Gallery Section (Moved below and outside the grid) */}
        {/* Gallery Section */}
        {game.gallery && game.gallery.length > 0 && (
          <div className="gallery-section">
            <h3>Gallery</h3>
            <div className="gallery-grid">
              {game.gallery.map((img, index) => (
                <div
                  key={index}
                  className="gallery-item"
                  onClick={() => setSelectedImg(img)} // Open modal on click
                >
                  <img src={img} alt={`${game.title} screenshot ${index}`} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedImg && (
          <div className="modal-overlay" onClick={() => setSelectedImg(null)}>
            <button className="modal-close" onClick={() => setSelectedImg(null)}>&times;</button>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img src={selectedImg} alt="Enlarged view" />
            </div>
          </div>
        )}


      </div>

      <Footer />
    </>
  );
}

export default GameDetail;