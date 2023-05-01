import React from 'react'
import search from './images/search-svgrepo.svg'
import record from './images/record-svgrepo.svg'
import notify from './images/notification.svg'


export default function Header() {
    return (
        <div className='flex justify-center border-b-[1px]'>
             <div class="flex justify-center m-2 ml-20">
            <div class="h-fit rounded-full  flex justify-center w-fit">
                <div>
                    <input type="text" placeholder="Search" class="w-96 h-10 rounded-l-full pl-3 border" />
                </div>
                <div class="rounded-r-full">
                    <button class="bg-gray-100 w-20 h-10 inline-flex justify-center items-center rounded-r-full">
                    <img src={search} alt="search-icon" class="w-5" />
                    </button>
                </div>
            </div>
        </div>
        <div className='flex space-x-20'>
            <img src={record} alt="record" className='w-5' />
            <img src={notify} alt="notify" className='w-5' />
        </div>
           
        </div>
    )
}