import { useParams, NavLink } from 'react-router';
import { gamesData } from '/src/data/games';
import { Header } from '../../components/Header';
import Footer from '../../components/Footer';
import { useEffect } from 'react';
import './GameUpdatePage.css';

function GameUpdatePage() {
  const { gameId, updateId } = useParams();

   useEffect(() => {
    window.scrollTo(0, 0);
  }, [gameId, updateId]);
  
  const game = gamesData.find(g => g.id === gameId);
  const update = game?.updates?.find(u => u.id === updateId);

  if (!update) return <div className="error">Update not found!</div>;

  return (
    <>
      <Header />
      <article className="update-page-container">
        <header className="update-header">
          <NavLink to={`/game/${gameId}`} className="back-link">← Back to {game.title}</NavLink>
          <span className="update-page-date">{update.date}</span>
          <h1>{update.title}</h1>
        </header>
        <hr />
        <div 
          className="update-page-content"
          dangerouslySetInnerHTML={{ __html: update.content }}
        />
      </article>
      <Footer />
    </>
  );
}

export default GameUpdatePage;