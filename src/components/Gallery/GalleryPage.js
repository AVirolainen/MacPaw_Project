import "./GalleryPage.css"
import {SearchOutlined} from '@ant-design/icons'

import like from "../../images/rates/like.png"
import heart from "../../images/rates/heart.png"
import dislike from "../../images/rates/dislike.png"

const GalleryPage = ()=>{
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
        <div className="votingBody">
            
        </div>
    </div>
    )
}

export default GalleryPage