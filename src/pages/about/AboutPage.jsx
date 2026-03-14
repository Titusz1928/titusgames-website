import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import FeatureList from "../../components/FeatureList";
import './AboutPage.css';
import { useEffect } from "react";

export function AboutPage(){
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    const aboutData = [
  {
    title: "Our Mission",
    description: "At TitusGames, we believe in gameplay first. We build experiences that we want to play ourselves.",
    image: "/logo1.png",
    buttonText: "Join Discord",
    buttonLink:"/discord"
  },
  {
    title: "The Developer",
    description: "TitusGames is a solo venture driven by a love for retro aesthetics and modern mechanics.",
    image: "logo2.png",
    buttonText: "Find out more",
    buttonLink: "https://borostitusz.netlify.app/home"
  }
];

    return (
        <>
            <Header />
            <FeatureList data={aboutData} />
            <Footer />
        </>
    );
}