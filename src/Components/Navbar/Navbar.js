import { Link } from "react-router-dom";
import { GiShoppingCart } from 'react-icons/gi';
import { FiLogIn } from 'react-icons/fi';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaFilter } from 'react-icons/fa';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { menuOpen } from "../../Redux/MobileFilterSlice";

function Navbar() {

    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const cart = useSelector(state => state.cart);
    return (
        <nav className="  flex gap-4 justify-around bg-yellow-400 p-5 text-4xl font-extrabold shadow-md 
        border-white-600 rounded-sm lg:text-2xl md:text-lg md:p-3 sm:text-sm sm:p-3 items-center vsm:text-sm flex-nowrap text-shadow vsm:gap-0 vsm:p-2  ">

            {/* Logo  */}
            <div >
                <Link to="/" className=" font-bold text-red-600 shadow-md rounded-br-3xl border-2 border-white rounded-md p-2 sm:text-sm  vsm:text-xs  ">
                    Tee-Rex
                </Link>
            </div>

            {/* Search  */}
            <div className="flex gap-1 " >
                <AiOutlineFileSearch className="text-slate-100  text-4xl shadow-md border border-white rounded lg:text-2xl md:text-xl sm:text-2xl vsm:text-lg " />
                <input className="h-10 shadow-inner	rounded text-center border border-white lg:text-3xl lg:h-8 lg:w-80 md:text-xl md:h-6 md:w-56 sm:h-6 vsm:h-5 vsm:w-24 vsm:text-xs" placeholder="Search here..." />
            </div>
            <button
                className="md:hidden lg:hidden xl:hidden"
                onClick={() => dispatch(menuOpen())} >
                <FaFilter />
            </button>

            {/* Login Cart */}
            <div className="flex gap-6 sm:hidden xs:hidden vsm:hidden "   >
                <div>
                    <Link to={"/cart"} className="flex gap-1 " >
                        <GiShoppingCart className="text-slate-100 text-4xl shadow-md border border-white rounded lg:text-2xl md:text-xl " />
                        <div className="text-sm border rounded-full h-max text-white p-1 bg-red-600">{cart && cart.length}</div>
                        CART
                    </Link>
                </div>
            </div>

            {/* Hanburger Button */}
            <div className="relative md:hidden lg:hidden xl:hidden hover:text-xl" >
                <button className={isOpen ? "text-green-600" : "text-red-600"} onClick={() => setIsOpen(!isOpen)} ><GiHamburgerMenu /></button>
            </div>

            {/* Mobile Menu */}
            <div className={isOpen ? " z-30 flex flex-col justify-center items-center gap-7  absolute right-0  h-64 w-screen top-11 bg-yellow-400" : "hidden"}>
                <div>
                    <Link to={"/cart"} className="flex gap-1 border-4 p-4 border-red-600 rounded-s-full shadow-xl " >
                        <GiShoppingCart className="text-slate-100 text-4xl shadow-md border border-white rounded " />
                        CART
                    </Link>
                </div>
            </div>
        </nav >
    )
}

export default Navbar;
