import React, { useEffect } from 'react'
import Filters from '../../Components/Filter/Filter'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../Redux/ItemSlice'
import { BsCurrencyRupee } from 'react-icons/bs';
import { add2Cart } from '../../Redux/cartSlice'

export default function LandingPage() {
    const mobilemenu = useSelector(state => state.mobileFilter);
    const dispatch = useDispatch();
    const { products, loading } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])

    if (loading) {
        return <div>Loading...</div>;
    }

    function addToCart(product) {
        dispatch(add2Cart(product))
    }

    return (
        <div>
            <div
                className='flex justify-center items-cente w-full h-full' >
                <Filters />
                <div
                    className={mobilemenu ? "hidden" : 'flex w-full gap-3 shadow-md flex-wrap items-center justify-center p-2 '} >
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className=" flex flex-col w-72 md:w-52 sm:w-44 rounded-b-3xl p-1 items-center overflow-hidden flex-nowrap border-2 shadow-sm border-gray-950 border-solid gap-2"  >
                            <img
                                src={product.imageURL}
                                className='top-0 left-0 h-full w-full object-cover z-0' />
                            <div
                                className='flex justify-between z-10 font-bold bg-amber-400 rounded-b-2xl gap-2 hover:text-lg '>
                                <div
                                    className="flex p-1 bg-lime-500 border-r-4  ">
                                    {product.name}
                                </div>
                                <div
                                    className="flex p-1">
                                    {product.price}
                                    <BsCurrencyRupee />
                                </div>
                            </div>
                            <button
                                onClick={() => addToCart(product)}
                                className="flex p-1 items-center justify-center rounded-ss-xl z-10 bg-white  border-2  border-gray-950 font-extrabold hover:text-lg">
                                Add 2 Cart
                            </button>
                        </div>))}
                </div>
            </div>
        </div>
    )
};
