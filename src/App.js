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
import SearchPage from "./components/Search/SearchPage"
import {useEffect, useState} from "react";
import {
    SearchOutlined } from '@ant-design/icons'

import like from "./images/rates/like.png"
import heart from "./images/rates/heart.png"
import dislike from "./images/rates/dislike.png"



import './App.css';

function App() {
    const [breed, setBreed] = useState("")

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

            <div className="votingWrapper">
            <div className="votingHeader">

                <div className="headerSearch">
                    <form className="example">
                        <input type="text" placeholder="Search for breeds by name" onChange={(e) => {setBreed(e.target.value);}}/>
                        <Link to="/search"  tyle={{ textDecoration: 'none' }}>
                            <button type="submit" className="buttonSearch">
                                <SearchOutlined />
                            </button>
                        </Link>

                    </form>
                </div>

                <div className="rateBlock">
                    <div className="headerRate">
                        <img src={like} alt="like" className="rateImage"/>
                    </div>
                    <div className='headerRate'>
                        <img src={heart} alt="heart" className="rateImage"/>
                    </div>
                    <div className="headerRate" >
                        <img src={dislike} alt="dislike" className="rateImage"/>
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
                    <Route path="/gallery" component={()=><GalleryPage/>} />
                    <Route path="/breeds"  component={()=><BreedsPage/>} />  
                    <Route path="/voting" component={()=><VotingPage/>} />
                    <Route path="/search" component={()=><SearchPage breed={breed}/>} />

                </Switch>

            </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
