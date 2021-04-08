import "./VotingPage.css"
import {
    SearchOutlined,
    MailOutlined,
    SettingOutlined } from '@ant-design/icons';

import like from "../../images/rates/like.png"
import heart from "../../images/rates/heart.png"
import dislike from "../../images/rates/dislike.png"

const VotingPage = ()=>{

    let response = await fetch('https://api.thedogapi.com/v1/breeds?attach_breed=0', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    });

    let result = await response.json()

    return(

        <div className="votingWrapper">
            <div className="votingHeader">

                <div className="headerSearch">
                    <form className="example">
                        <input type="text" placeholder="Search for breeds by name" />
                        <button type="submit">
                            <SearchOutlined />
                        </button>

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
            <div className="votingBody" />
        </div>

    )
}

export default VotingPage