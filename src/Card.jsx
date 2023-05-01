import React from 'react'
import space from './images/space-x.jpg'
import vertical from './images/menu-vertical.svg'

export default function Card(props) {
    return (
        <div className='relative w-[95%] my-4'>
            <img src={props.card.img} alt="image" className='rounded-md h-60 w-full' />
            <span className='absolute right-2 top-52 bg-black text-white rounded-md pr-2 pl-2'>{props.card.time}</span>
            <div className='flex'>
                <p className='font-bold w-[95%]'>
                    {props.card.par}
                </p>
                <img src={props.card.menuicon} alt="menu-icon" className='w-[5%] absolute right-2 bottom-6' />
            </div>
        </div>
    )
}