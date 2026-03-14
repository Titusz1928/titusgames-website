import Footer from "../../components/Footer";
import GamesGrid from "../../components/GamesGrid";
import { Header } from "../../components/Header";
import WelcomeCard from "../../components/WelcomeCard";
import './HomePage.css';

export function HomePage(){

    return (
        <>
            <Header />
            <WelcomeCard />
            <GamesGrid />
            <Footer />
        </>
    );
}