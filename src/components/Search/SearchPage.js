import "./SearchPage.css"
import back from "../../images/rates/back.png"
import {useEffect, useState} from "react";

const SearchPage = (props)=>{
    const[info, setInfo] = useState({})
    const breed = props.breed

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
            })
    }, [])

    return(
        <div className="votingBody">
            <div className="bodyHeader">
                <div className="backButton">
                    <img src={back} alt="back" className="rateImage"/>
                </div>
                <div className="backText">
                    Search
                </div>
            </div>

            <div className="rowBody">
                {
                info.map((item, index)=>{
                    if(breed == item.name){
                       return(
                            <div className="containerBreed">
                            <img src={item.image.url} alt="imageBreed" className="imageBreeds"/>
                            <div class="middle">
                                <div class="text">{item.name}</div>
                            </div>
                            </div>
                       )}
                })
                
                
                }
            </div>


        </div>
    )
}

export default SearchPage