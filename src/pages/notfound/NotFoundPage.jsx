import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import './NotFoundPage.css';
import errorImage from '../../assets/images/404.png';
import { NavLink } from 'react-router'; // Added for the button

export function NotFoundPage({ title = "Page not found", message = "Oops! The page you are looking for doesn't exist." }) {
    return (
        <>
            <Header />
            <div className="notfound-page">
                <h1 className="page-title">{title}</h1>
                <img src={errorImage} alt="Status Illustration" />
                <br></br>
                <p className="notfound-message">{message}</p>
                
                <NavLink to="/" className="home-button">
                    Return to Homepage
                </NavLink>
            </div>
            <Footer />
        </>
    );
}