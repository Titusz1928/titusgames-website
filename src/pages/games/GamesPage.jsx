import { gamesData } from '/src/data/games';
import FeatureList from '../../components/FeatureList'; // Use FeatureList!
import './GamesPage.css';
import { Header } from '../../components/Header';
import Footer from '../../components/Footer';
import { useEffect } from 'react';

function GamesPage() {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <>
      <Header />
      <div className="games-page">
        <header className="games-page-header">
          <h1>Our Portfolio</h1>
          <p>From mobile puzzles to desktop adventures, explore the worlds we've built at TitusGames.</p>
        </header>

        {/* Pass the gamesData array directly to FeatureList */}
        <div className="games-list-container">
          <FeatureList data={gamesData} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default GamesPage;