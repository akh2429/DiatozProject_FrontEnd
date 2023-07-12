import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Filters from '../../Components/Filter/Filter'
export default function LandingPage() {
    return (
        <div>
            <Navbar />
            <div className='flex justify-center items-cente w-full h-full' >
                <Filters />
                <div className='flex justify-center items-center w-full h-full ' >

                </div>
            </div>
            <Footer />
        </div>
    )
};
