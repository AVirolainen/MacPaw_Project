import logo from './images/logo.svg';
import votingImage from "./images/votingImage.svg"
import breedsImage from "./images/breedsImage.svg"
import galleryImage from "./images/galleryImage.svg"
import mainImage from "./images/mainImage.svg"
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import BreedsPage from "./components/Breeds/BreedsPage";
import VotingPage from "./components/Voting/VotingPage";
import GalleryPage from "./components/Gallery/GalleryPage";



import './App.css';

function App() {
    return (
        <BrowserRouter>
        <div className="appBody">
            <div className="mainBody">
                <img src={logo} alt={"logo"} className="logo"/>
                <div className="bodyHeader">
                    Hi intern!
                </div>
                <div className="headerText">
                    Welcome to MSI 2021 Front-end test
                </div>
                <div className="bodyText">
                    Lets start using The Dogs API
                </div>
                <div className="bodyCards">
                    <div className="cardRoute">
                        <img src={votingImage} alt={"votingImage"} className="cardImage"/>
                    </div>
                    <div className="cardRoute">
                        <img src={breedsImage} alt={"breedsImage"} className="cardImage"/>
                    </div>
                    <div className="cardRoute">
                        <img src={galleryImage} alt={"galleryImage"} className="cardImage"/>
                    </div>

                </div>
                <div className="buttons">
                    <div className="routeButton">
                            <Link to="/voting" style={{ textDecoration: 'none' }}>
                                <div className="linkText">
                                    Voting
                                </div>
                            </Link>
                    </div>
                    <div className="routeButton">
                            <Link to="/breeds" style={{ textDecoration: 'none' }}>
                                <div className="linkText">
                                    Breeds
                                </div>
                            </Link>
                    </div>
                    <div className="routeButton">
                            <Link to="/gallery" style={{ textDecoration: 'none'}}>
                                <div className="linkText">
                                    Gallery
                                </div>
                            </Link>
                    </div>
                </div>
            </div>


                <Switch>
                    <Route exact path="/">
                        <div className="mainField">
                            <div className="fieldBack"/>
                            <div className="wrapper">
                                <img src={mainImage} alt={"galleryImage"} className="mainImage"/>
                            </div>
                        </div>
                    </Route>
                    <Route path="/gallery">
                        <GalleryPage />
                    </Route>
                    <Route path="/breeds">
                        <BreedsPage />
                    </Route>
                    <Route path="/voting">
                        <VotingPage />
                    </Route>
                </Switch>

        </div>
        </BrowserRouter>
    );
}

export default App;
