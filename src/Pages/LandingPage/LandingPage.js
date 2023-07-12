import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Filters from '../../Components/Filter/Filter'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../Redux/ItemSlice'

export default function LandingPage() {
    const dispatch = useDispatch();
    const { products, loading } = useSelector((state) => state.products);
    const error = useSelector((state) => state.products.error);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])

    if (loading) {
        return <div>Loading...</div>;
    }
    if (products) {
        console.log(products);
    }

    return (
        <div>
            <Navbar />
            <div className='flex justify-center items-cente w-full h-full' >
                <Filters />
                <div className='flex justify-center items-center w-full h-full ' >
                    Products
                </div>
            </div>
            <Footer />
        </div>
    )
};
