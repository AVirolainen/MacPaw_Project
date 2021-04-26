/* eslint-disable no-undef */
import "./GalleryPage.css"
import ModalPage from "./ModalPage"

import {useEffect, useState} from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import back from "../../images/rates/back.png"
import upload from "../../images/whiterates/upload.png"
import { DownOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';

const GalleryPage = ()=>{
    const [info, setInfo] = useState([])
    const [order, setOrder] = useState("Random")
    const [type, setType] = useState("Static")
    const [limit, setLimit] = useState(5)
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
    }, [info])

    const handleLimits=(e)=>{
        setLimit(e)
    }
    const handleOrder=(e)=>{
        setOrder(e)
    }
    const handleType=(e)=>{
        setType(e)
    }
    const handleBreed=(e)=>{
        setBreed(e)
    }

    const menuOrder = (
        <Menu>
            <Menu.Item key="0">
            <a className="dropdownTextLimits" onClick={()=>handleOrder("Random")}>
                Random
            </a>
            </Menu.Item>
            <Menu.Item key="1">
            <a className="dropdownTextLimits" onClick={()=>handleOrder("Desc")}>
                Desc
            </a>
            </Menu.Item>
            <Menu.Item key="3">
            <a className="dropdownTextLimits" onClick={()=>handleOrder("Asc")}>
                Asc
            </a>
            </Menu.Item>

        </Menu>
      );

      const menuType = (
        <Menu>
            <Menu.Item key="0">
            <a className="dropdownTextLimits" onClick={()=>handleType("All")}>
                All
            </a>
            </Menu.Item>
            <Menu.Item key="1">
            <a className="dropdownTextLimits" onClick={()=>handleType("Static")}>
                Static
            </a>
            </Menu.Item>
            <Menu.Item key="3">
            <a className="dropdownTextLimits" onClick={()=>handleType("Animated")}>
                Animated
            </a>
            </Menu.Item>

        </Menu>
      );

      const menuBreed = (
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

      const menuLimit= (
        <Menu>
            <Menu.Item key="0">
            <a className="dropdownTextLimits" onClick={()=>handleLimits(5)}>
                5 items per page
            </a>
            </Menu.Item>
            <Menu.Item key="1">
            <a className="dropdownTextLimits" onClick={()=>handleLimits(10)}>
                10 items per page
            </a>
            </Menu.Item>
            <Menu.Item key="3">
            <a className="dropdownTextLimits" onClick={()=>handleLimits(15)}>
                15 items per page
            </a>
            </Menu.Item>
            <Menu.Item key="4">
            <a className="dropdownTextLimits" onClick={()=>handleLimits(15)}>
                20 items per page
            </a>
            </Menu.Item>

        </Menu>
      );

    return(
        <div className="votingBody">
            <div className="bodyHeader">
                <div className="backButton">
                    <img src={back} alt="back" className="rateImage"/>
                </div>
                <div className="backText">
                    Gallery
                </div>
                <Popup trigger={<button className="modalButton"> <img src={upload} alt="back" className="rateImage"/> Open Modal </button>} modal>
                    {close => <ModalPage />}
                </Popup>
            </div>
            <div className="options">
                <div className="optionsLine">
                    <div className="optionItem">
                        <div className="optionText">Order</div>
                        <div className="dropdownOptions">
                        <Dropdown overlay={menuOrder} trigger={['click']}>
                            <a className="dropdownTextOptions" onClick={e => e.preventDefault()}>
                                <div className="dropdownOptions">{order}</div>
                                <DownOutlined />
                            </a>             
                        </Dropdown> 
                </div>
                    </div>
                    <div className="optionItem">
                        <div className="optionText">Type</div>
                        <div className="dropdownOptions">
                            <Dropdown overlay={menuType} trigger={['click']}>
                                <a className="dropdownTextOptions" onClick={e => e.preventDefault()}>
                                <div className="dropdownOptions">{type}</div>
                                    <DownOutlined />
                                </a>             
                            </Dropdown> 
                </div>  
                    </div>
                </div>
                <div className="optionsLine">
                    <div className="optionItem">
                        <div className="optionText">Breed</div>
                        <div className="dropdownOptions">
                            <Dropdown overlay={menuBreed} trigger={['click']}>
                                <a className="dropdownTextOptions" onClick={e => e.preventDefault()}>
                                <div className="dropdownOptions">{breed}</div>
                                    <DownOutlined />
                                </a>             
                            </Dropdown> 
                </div>

                    </div>
                    <div className="optionItem">
                        <div className="optionText">Limit</div>
                        <div className="dropdownOptions">
                            <Dropdown overlay={menuLimit} trigger={['click']}>
                                <a className="dropdownTextOptions" onClick={e => e.preventDefault()}>
                                    <div className="dropdownOptions">{limit} items per page </div>
                                    <DownOutlined />
                                </a>             
                            </Dropdown> 
                </div>
                    </div>
                </div>
            </div>

            
            <div className="breedsBodyGallery">
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

export default GalleryPage