import React from 'react'
import Content from './Content.jsx'
import iconsdata from './iconsdata.jsx'
import Header from './Header.jsx'
import Heading from './Heading.jsx'
import headdata from './headdata.jsx'
import Card from './Card.jsx'
import carddata from './carddata.jsx'
import menu from './images/menu-sample.svg'
import youtube from './images/youtube-icon.svg'


export default function App() {
  const iconsArray = iconsdata.map(item =>
    <Content
    key = {item.id}
    item = {item}
    />
    )

  const headArray = headdata.map(items =>
    <Heading
    items = {items}
     />
    )

  const cardsArray = carddata.map(card =>
    <Card
    key = {card.id}
    card = {card}
     />
    )

  return (
    <div className='flex'>
      <div className='w-1/5 h-screen flex flex-col overflow-y-scroll'>
        <div className='flex items-center ml-2 mt-3'>
          <img src={menu} alt="menu" className='w-5' />
          <img src={youtube} alt="youtube" className='w-5 ml-4' />
          <h2 className='font-semibold'>YouTube 
            <span className='font-normal'>
              <sup>KE</sup>
            </span>
          </h2>
        </div>
        <div className='flex flex-col mt-8'>
          {iconsArray}
        </div>
        
      </div>
      <div className='h-screen overflow-y-scroll'>
        <Header />
        <div className='w-full'>
          {headArray}
        </div>
        <div className='grid grid-cols-3 justify-items-center'>
          {cardsArray}
        </div>
      </div>
    </div>
  )
}
 