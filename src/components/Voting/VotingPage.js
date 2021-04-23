import "./VotingPage.css"
import ActionMessage from "./ActionMessage";
import back from "../../images/rates/back.png"
import whiteLike from "../../images/whiterates/whiteSmile.png"
import whiteHeart from "../../images/whiterates/whiteHeart.png"
import whiteDislike from "../../images/whiterates/whiteDislike.png"
import {useEffect, useState} from "react";

const VotingPage = ()=>{
    const [info, setInfo] = useState({})
    const [image, setImage] = useState("")
    const [message, setMessage] = useState([])

    const [number, setNumber] = useState(0)

    useEffect(() => {
        fetch("https://api.thedogapi.com/v1/breeds?attach_breed=0")
            .then((response)=>{
                if(response.ok){
                    return(response.json())
                }
                throw response
            })
            .then(data =>{
                setInfo(data)
                setImage(data[number].image.url)
            })
    }, [number])

    const logMessage= (type)=>{
        const object={
            time: "1",
            id: info[number].reference_image_id,
            type: type
        }
        console.log(message)
        setMessage(message.concat(object))
      
        setNumber(number+1)
        setImage(info[number].image.url)
    


    }

    return(
            <div className="votingBody">
                <div className="bodyHeader">
                    <div className="backButton">
                        <img src={back} alt="back" className="rateImage"/>
                    </div>
                    <div className="backText">
                        Voting
                    </div>
                </div>

                <img src={image} alt="dogImage" className="dogImage" />
                <div className="buttonsBlock">
                    <div className="rateButton" onClick={()=>logMessage("like")}>
                        <img src={whiteLike} alt="like" className="rateImageButton"/>
                    </div>
                    <div className="rateButton" onClick={()=>logMessage("heart")}>
                        <img src={whiteHeart} alt="like" className="rateImageButton"/>
                    </div>
                    <div className="rateButton" onClick={()=>logMessage("dislike")}>
                        <img src={whiteDislike} alt="like" className="rateImageButton"/>
                    </div>
                </div>
                {message.slice(0).reverse().map((item, index) => {
                    return(
                    <div> 
                        <ActionMessage data={item} key={index}/>
                    </div>)
                })}
            </div>
     

    )
}

export default VotingPage