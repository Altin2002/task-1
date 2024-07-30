import React from 'react'
import './Cards.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe, faTextWidth, faLanguage, faRulerCombined, faSearch } from '@fortawesome/free-solid-svg-icons';

const icons = {
    faGlobe,
    faLanguage,
    faTextWidth,
    faRulerCombined,
    faSearch

};

const Cards = ({ title, description, icon }) => {
    return (
        <>
            <div className='card'>
                <div>
                    <FontAwesomeIcon className='icons' icon={icons[icon]}></FontAwesomeIcon>
                </div>
                <div className='card-content'>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}

export default Cards