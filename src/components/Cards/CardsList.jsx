import React from 'react'
import Cards from './Cards'
import data from '../../data.js'
import './Cards.css'

const CardsList = () => {
  return (
    <div className='cards-list'>
        {data.map((item, index) => (
            <Cards 
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
            />
        ))}
        
    </div>
  )
}

export default CardsList