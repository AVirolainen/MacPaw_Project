/* eslint-disable no-undef */
import "./GalleryPage.css"

import like from "../../images/rates/like.png"
import heart from "../../images/rates/heart.png"
import dislike from "../../images/rates/dislike.png"
import back from "../../images/rates/back.png"
import { DownOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';

const GalleryPage = ()=>{

    const menuOrder = (
        <Menu>
            <Menu.Item key="0">
            <a className="dropdownTextLimits" onClick={()=>handleLimits(5)}>
                Random
            </a>
            </Menu.Item>
            <Menu.Item key="1">
            <a className="dropdownTextLimits" onClick={()=>handleLimits(10)}>
                Desc
            </a>
            </Menu.Item>
            <Menu.Item key="3">
            <a className="dropdownTextLimits" onClick={()=>handleLimits(15)}>
                Asc
            </a>
            </Menu.Item>

        </Menu>
      );

      const menuType = (
        <Menu>
            <Menu.Item key="0">
            <a className="dropdownTextLimits" onClick={()=>handleLimits(5)}>
                All
            </a>
            </Menu.Item>
            <Menu.Item key="1">
            <a className="dropdownTextLimits" onClick={()=>handleLimits(10)}>
                Static
            </a>
            </Menu.Item>
            <Menu.Item key="3">
            <a className="dropdownTextLimits" onClick={()=>handleLimits(15)}>
                Animated
            </a>
            </Menu.Item>

        </Menu>
      );

      const menuBreed= (
        <Menu>
            <Menu.Item key="0">
            <a className="dropdownTextLimits" onClick={()=>handleLimits(5)}>
                All
            </a>
            </Menu.Item>
            <Menu.Item key="1">
            <a className="dropdownTextLimits" onClick={()=>handleLimits(10)}>
                Static
            </a>
            </Menu.Item>
            <Menu.Item key="3">
            <a className="dropdownTextLimits" onClick={()=>handleLimits(15)}>
                Animated
            </a>
            </Menu.Item>

        </Menu>
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
            </div>
            <div className="options">
                <div className="optionsLine">
                    <div className="optionItem">
                        <div className="optionText">Order</div>
                        <div className="dropdownOptions">
                        <Dropdown overlay={menuOrder} trigger={['click']}>
                            <a className="dropdownTextOptions" onClick={e => e.preventDefault()}>
                                <div className="dropdownOptions">Random </div>
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
                                <div className="dropdownOptions">Static</div>
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
                                <div className="dropdownOptions">None </div>
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
                                    <div className="dropdownOptions">5 items per page </div>
                                    <DownOutlined />
                                </a>             
                            </Dropdown> 
                </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default GalleryPage