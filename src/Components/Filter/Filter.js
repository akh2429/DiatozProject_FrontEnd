import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { colourcheckIn, colourcheckOut, gendercheckIn, gendercheckOut, pricecheckIn, pricecheckOut, typecheckIn, typecheckOut } from "../../Redux/checkboxFiltersSlice"

export default function Filters() {

    const Dispatch = useDispatch();
    const mobilemenu = useSelector(state => state.mobileFilter);

    function colorHandler(e) {
        const { value, checked } = e.target;
        if (checked) {
            Dispatch(colourcheckIn(value));
        } else {
            Dispatch(colourcheckOut(value));
        }
    };
    function genderHandler(e) {
        const { value, checked } = e.target;
        if (checked) {
            Dispatch(gendercheckIn(value));
        } else {
            Dispatch(gendercheckOut(value));
        }
    };
    function priceHandler(e) {
        const { value, checked } = e.target;
        if (checked) {
            Dispatch(pricecheckIn(value));
        } else {
            Dispatch(pricecheckOut(value));
        }
    };
    function typeChanger(e) {
        const { value, checked } = e.target;
        if (checked) {
            Dispatch(typecheckIn(value));
        } else {
            Dispatch(typecheckOut(value));
        }
    };

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
                    Red<input type='checkbox' onChange={colorHandler} value="Red" />
                </div>
                <div
                    className='flex gap-2' >
                    Blue<input type='checkbox' onChange={colorHandler} value="Blue" />
                </div>
                <div
                    className='flex gap-2' >
                    Green<input type='checkbox' onChange={colorHandler} value="Green" />
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
                    Men<input type='checkbox' onChange={genderHandler} value="Men" />
                </div>
                <div
                    className='flex gap-2' >
                    Women<input type='checkbox' onChange={genderHandler} value="Women" />
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
                    0-Rs250<input type='checkbox' onChange={priceHandler} value="0-250" />
                </div>
                <div
                    className='flex gap-2' >
                    250-Rs450<input type='checkbox' onChange={priceHandler} value="250-450" />
                </div>
                <div
                    className='flex gap-2'>
                    Rs450<input type='checkbox' onChange={priceHandler} value="450-1000" />
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
                    <input type='checkbox' value="Polo" onChange={typeChanger} />
                </div>
                <div
                    className='flex gap-2'>
                    Hoodie<input type='checkbox' value="Hoodie" onChange={typeChanger} />
                </div>
                <div
                    className='flex gap-2'>
                    Basic<input type='checkbox' value="Basic" onChange={typeChanger} />
                </div>
            </div>
        </div>
    )
};