import React from 'react'
import { useSelector } from 'react-redux'


export default function Filters() {
    const mobilemenu = useSelector(state => state.mobileFilter);
    return (
        <div
            className={mobilemenu ? "flex flex-col p-4 justify-center items-center w-full h-full md:hidden lg:hidden xl:hidden gap-4 text-lg font-extralight shadow-md border md:text-xs sm:text-xs vsm:text-xs" :
                'flex flex-col p-4 justify-center items-center w-1/4 h-full sm:hidden vsm:hidden gap-4 text-lg font-extralight shadow-md border md:text-xs sm:text-xs vsm:text-xs '} >
            <div
                className='flex flex-col border-2 gap-3 justify-center items-center p-3 shadow-md rounded-2xl'>
                <span
                    className='font-extrabold text-cyan-700 ' >
                    Colour
                </span>
                <div
                    className='flex gap-2' >
                    Red<input type='checkbox' />
                </div>
                <div
                    className='flex gap-2' >
                    Blue<input type='checkbox' />
                </div>
                <div
                    className='flex gap-2' >
                    Green<input type='checkbox' />
                </div>
            </div>
            <div
                className='flex flex-col  border-2 gap-3 justify-center items-center p-3 shadow-md rounded-2xl ' >
                <span
                    className='font-extrabold text-cyan-700'>
                    Gender
                </span>
                <div
                    className='flex gap-2' >
                    Men<input type='checkbox' />
                </div>
                <div
                    className='flex gap-2' >
                    Women<input type='checkbox' />
                </div>
            </div>
            <div
                className='flex flex-col  border-2 gap-3 justify-center items-center p-3 shadow-md rounded-2xl ' >
                <span
                    className='font-extrabold text-cyan-700'>
                    Price
                </span>
                <div
                    className='flex gap-2' >
                    0-Rs250<input type='checkbox' />
                </div>
                <div
                    className='flex gap-2' >
                    0-Rs450<input type='checkbox' />
                </div>
                <div
                    className='flex gap-2'>
                    Rs450<input type='checkbox' />
                </div>
            </div>
            <div
                className='flex flex-col  border-2 gap-3 justify-center items-center p-3 shadow-md rounded-2xl ' >
                <span
                    className='font-extrabold text-cyan-700'>
                    Type
                </span>
                <div
                    className='flex gap-2'>
                    Polo
                    <input type='checkbox' />
                </div>
                <div
                    className='flex gap-2'>
                    Hoodie<input type='checkbox' />
                </div>
                <div
                    className='flex gap-2'>
                    Basic<input type='checkbox' />
                </div>
            </div>
        </div>
    )
}
