import logo from './images/logo.svg';
import './App.css';

function App() {
    return (
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

                    </div>
                    <div className="cardRoute">

                    </div>
                    <div className="cardRoute">

                    </div>
                </div>
            </div>

            <div className="mainImage">

            </div>
        </div>
    );
}

export default App;
