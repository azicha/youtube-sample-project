import React from 'react'

export default function Content(props) {
    return (
        <button className='inline-flex items-center'>
            <img src={props.item.icon} alt="image" className='w-5 m-2' />
            <span>{props.item.name}</span>
        </button>
    )
}