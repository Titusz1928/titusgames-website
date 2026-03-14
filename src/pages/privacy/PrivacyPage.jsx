import { useParams } from 'react-router';
import { gamesData } from '/src/data/games';
import { generalPrivacy } from '/src/data/legal'; // Import our new data
import { Header } from '../../components/Header';
import Footer from '../../components/Footer';
import { useEffect } from 'react';
import './PrivacyPage.css';

function PrivacyPage() {
  const { gameId } = useParams();

  useEffect(() => {
        window.scrollTo(0, 0);
      }, [gameId]);

  // 1. Determine which data to use
  let contentSource;
  
  if (gameId === 'general') {
    contentSource = generalPrivacy;
  } else {
    contentSource = gamesData.find(g => g.id === gameId);
  }

  // 2. Handle 404
  if (!contentSource) return <div className="error">Privacy Policy not found.</div>;

  // 3. Process the HTML (safely handle the replace only if {{ID}} exists)
  const processedHTML = contentSource.privacyHTML.replace(/{{ID}}/g, gameId);

  return (
    <>
      <Header />
      <div className="privacy-wrapper">
        <div 
          className="privacy-content"
          dangerouslySetInnerHTML={{ __html: processedHTML }}
        />
      </div>
      <Footer />
    </>
  );
}

export default PrivacyPage;