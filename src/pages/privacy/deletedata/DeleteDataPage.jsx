import { useParams } from 'react-router';
import { gamesData } from '/src/data/games';
import { Header } from '../../../components/Header';
import Footer from '../../../components/Footer';
import '../PrivacyPage.css'; // We can reuse the same CSS for legal pages

function DeleteDataPage() {
  const { gameId } = useParams();
  const game = gamesData.find(g => g.id === gameId);

  if (!game) return <div className="error">Data deletion instructions not found.</div>;

  return (
    <>
      <Header />
      <div className="privacy-wrapper">
        <div 
          className="privacy-content"
          dangerouslySetInnerHTML={{ __html: game.deletionHTML }} 
        />
      </div>
      <Footer />
    </>
  );
}

export default DeleteDataPage;