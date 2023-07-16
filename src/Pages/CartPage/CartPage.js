import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseQuantity, decreaseQuantity, deleteItem } from '../../Redux/cartSlice'
import { BsCurrencyRupee } from 'react-icons/bs';
import { AiFillMinusCircle, AiOutlinePlusCircle, AiFillDelete } from 'react-icons/ai';

export default function CartPage() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    function increaseQuantityHandler(id) {
        dispatch(increaseQuantity(id));
    }
    function DecreaseQuantityHandler(id) {
        dispatch(decreaseQuantity(id));
    }
    function deleteItemHandler(id) {
        dispatch(deleteItem(id));
    }
    console.log(cart);
    return (
        <div>
            <div>
                {cart && cart.length === 0 ? (
                    <div
                        className='flex justify-center w-full  h-screen   shadow-md rounded-full items-center p-4' >
                        Items Not available. Please add items first.</div>
                ) : (
                    cart && cart.map((val) => (
                        <div
                            key={val.id}
                            className='flex items-center h-40 w-full mx-auto font-extrabold m-5 p-4 lg:text-2xl md:text-xl sm:text-xs vsm:text-xs '>
                            <div
                                className='flex justify-start w-1/2 shadow-md  h-full items-center p-4 gap-5 lg:text-2xl md:text-xl sm:text-xs vsm:text-xs '>
                                <div
                                    className='h-full'>
                                    <img
                                        alt='Not Available'
                                        src={val.imageURL}
                                        className='w-full h-full object-contain' />
                                </div>
                                <div>{val.name}</div>
                                <div>Qty:-{val.cartQuantity}</div>
                            </div>
                            <div
                                className='flex justify-around w-1/2  h-full shadow-md  items-center p-4 lg:text-2xl md:text-xl sm:text-xs vsm:text-xs'>
                                <div
                                    className='flex  gap-4'>
                                    <button
                                        className='text-5xl lg:text-2xl md:text-xl sm:text-sm vsm:text-sm text-green-500 border-2 rounded-lg '
                                        onClick={() => increaseQuantityHandler(val.id)}>
                                        <AiOutlinePlusCircle />
                                    </button>
                                    <button
                                        className='text-5xl lg:text-2xl md:text-xl sm:text-sm vsm:text-sm border-2 rounded-lg '
                                        onClick={() => DecreaseQuantityHandler(val.id)}>
                                        <AiFillMinusCircle />
                                    </button>
                                    <button
                                        className='text-5xl lg:text-2xl md:text-xl sm:text-sm vsm:text-sm text-red-600 border-2 rounded-lg'
                                        onClick={() => deleteItemHandler(val.id)}>
                                        <AiFillDelete />
                                    </button>
                                </div>
                                <div
                                    className='flex' >
                                    {val.price * val.cartQuantity}
                                    <BsCurrencyRupee />/-
                                </div>
                            </div>
                        </div>
                    ))
                )}
                <div
                    className='flex justify-center  items-center h-40 w-full mx-auto font-extrabold m-5 p-4 lg:text-2xl md:text-xl sm:text-sm vsm:text-sm'>
                    Total Amount:-{cart && cart.reduce((accumlator, product) => { return accumlator + product.cartQuantity * product.price }, 0)}
                    <BsCurrencyRupee />/-
                </div>
            </div>
        </div>
    )
}
