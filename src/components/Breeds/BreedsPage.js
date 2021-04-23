import "./BreedsPage.css"
import 'antd/dist/antd.css';
import {SearchOutlined} from '@ant-design/icons'

import like from "../../images/rates/like.png"
import heart from "../../images/rates/heart.png"
import dislike from "../../images/rates/dislike.png"
import back from "../../images/rates/back.png"
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import alphabet from "../../images/whiterates/alphabet.png"
import unalphabet from "../../images/whiterates/unalpabet.png"

import {useEffect, useState} from "react";

function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const bandA = a.name.toUpperCase();
    const bandB = b.name.toUpperCase();
  
    let comparison = 0;
    if (bandA > bandB) {
      comparison = 1;
    } else if (bandA < bandB) {
      comparison = -1;
    }
    return comparison;
  }


const BreedsPage = ()=>{
    const [info, setInfo] = useState([])
    const [limit, setLimit] = useState(10)
    const [breed, setBreed] = useState("All breeds")

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

    console.log(info)

    const menuBreeds = (
        <div className="dropdownBreedsMenu">
        <Menu>
        <Menu.Item key="all">
            <a className="dropdownTextLimits" onClick={()=>handleBreed("All breeds")}>
                All breeds
            </a>
        </Menu.Item>
        {info.map((item, index)=>{
                       return(
                        <Menu.Item key={index}>
                        <a className="dropdownTextLimits" onClick={()=>handleBreed(item.name)}>
                            {item.name}
                        </a>
                        </Menu.Item>
                       ) 
                })}
        </Menu>
        </div>
      );
    
    const menuLimits = (
        <Menu>
            <Menu.Item key="0">
            <a className="dropdownTextLimits" onClick={()=>handleLimits(5)}>
                Limit: 5
            </a>
            </Menu.Item>
            <Menu.Item key="1">
            <a className="dropdownTextLimits" onClick={()=>handleLimits(10)}>
                Limit: 10
            </a>
            </Menu.Item>
            <Menu.Item key="3">
            <a className="dropdownTextLimits" onClick={()=>handleLimits(15)}>
                Limit: 15
            </a>
            </Menu.Item>
            <Menu.Item key="4">
            <a className="dropdownTextLimits" onClick={()=>handleLimits(20)}>
                Limit: 20
            </a>
            </Menu.Item>
        </Menu>
      );
    
      const handleLimits=(number)=>{
          setLimit(number)
      }
      
      const handleAlphabet=(flag)=>{
        let temp = info.sort(compare)
        if (flag){
            setInfo(temp)
        }
        else{
            let temp2 = temp.reverse()
            setInfo(temp2)
        }
      }

      const handleBreed=(name)=>{
          setBreed(name)
      }

    return(
        <div className="breedsBody">
            <div className="bodyHeader">
                <div className="backButton">
                    <img src={back} alt="back" className="rateImage"/>
                </div>
                <div className="backText">
                    Breeds
                </div>  
                <div className="dropdownBreeds">
                    <Dropdown overlay={menuBreeds} trigger={['click']}>
                        <a className="dropdownText" onClick={e => e.preventDefault()}>
                            <div className="dropdownTextBreeds">{breed}</div>
                            
                        </a>
                        
                    </Dropdown>
                    
                </div>  
                <div className="dropdownBreeds">
                    <Dropdown overlay={menuLimits} trigger={['click']}>
                        <a className="dropdownTextLimits" onClick={e => e.preventDefault()}>
                            <div className="dropdownLimits">Limit: {limit}</div>
                            <DownOutlined />
                        </a>             
                    </Dropdown> 
                </div> 
                <div className="alphabetWrapper">
                    <div className="dropdownBreeds alp" onClick={()=>handleAlphabet(true)}>
                        <img className="alphabetImage" src={alphabet} alt="img"/>
                    </div>
                    <div className="dropdownBreeds alp" onClick={()=>handleAlphabet(false)}>
                        <img className="alphabetImage" src={unalphabet} alt="img"/>
                    </div> 
                </div>
            </div>
            <div className="rowBody">
                {
                info.map((item, index)=>{
                    if((breed == "All breeds" && index<limit) || (breed == item.name)){
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

export default BreedsPage