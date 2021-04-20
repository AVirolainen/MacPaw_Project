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

const BreedsPage = ()=>{
    const [info, setInfo] = useState([])
    const [limit, setLimit] = useState(10)

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
        <Menu>
            <Menu.Item key="0">
            <a className="dropdownText" href="https://www.antgroup.com">1st menu item</a>
            </Menu.Item>
            <Menu.Item key="1">
            <a className="dropdownText" href="https://www.aliyun.com">2nd menu item</a>
            </Menu.Item>
            <Menu.Item key="3">
            <a className="dropdownText" href="https://www.aliyun.com">3rd menu item</a>
            </Menu.Item>
        </Menu>
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
      
      const handleAlphabey
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
                            <div className="dropdownTextBreeds">All breeds</div>
                            <DownOutlined />
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
                    <div className="dropdownBreeds alp">
                        <img className="alphabetImage" src={alphabet} alt="img"/>
                    </div>
                    <div className="dropdownBreeds alp">
                        <img className="alphabetImage" src={unalphabet} alt="img"/>
                    </div> 
                </div>
            </div>
            <div className="rowBody">
                {info.slice(0, limit).map((item, index)=>{
                       return(
                            <div className="containerBreed">
                            <img src={item.image.url} alt="imageBreed" className="imageBreeds"/>
                            <div class="middle">
                                <div class="text">{item.name}</div>
                            </div>
                            </div>
                       ) 
                })}
            </div>
        </div>
    </div>
    )
}

export default BreedsPage