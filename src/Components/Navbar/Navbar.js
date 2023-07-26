import { Link } from "react-router-dom";
import { AiOutlineLogout } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineFavorite } from 'react-icons/md';
import { BiHome, BiSolidLogInCircle, BiLogOut } from 'react-icons/bi';
import { HiLogin } from 'react-icons/hi';
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginSlice } from "../../Redux/loginSlice";
import jwtDecode from "jwt-decode";

function Navbar() {
    const loginState = useSelector((state) => state.loginSlice);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const user = useMemo(() => {
        const JWtoken = JSON.parse(localStorage.getItem("userToken"));
        if (JWtoken) {
            const decoded = jwtDecode(JWtoken.token);
            return decoded
        }
    }, [navigate]);

    console.log(user);

    function logoutHandler() {
        if (user) {
            localStorage.removeItem("userToken")
            navigate("/");
            toast.success("Logged out SucessFully")
        }
    }

    return (
        <nav
            className="  flex gap-4 justify-around bg-yellow-400 p-5 text-4xl font-extrabold shadow-md 
        border-white-600 rounded-sm lg:text-2xl md:text-lg md:p-3 sm:text-sm sm:p-3 items-center vsm:text-sm flex-nowrap text-shadow vsm:gap-0 vsm:p-2  ">
            {/* Logo  */}
            <div >
                <Link
                    to="/"
                    className=" font-bold text-red-600 shadow-md rounded-br-3xl border-2 border-white rounded-md p-2 sm:text-sm  vsm:text-xs  ">
                    InviCia
                </Link>
            </div>

            {/* Navigation  */}
            <div
                className="flex gap-1 " >
                <div
                    className="  rounded text-center  lg:text-3xl lg:h-8 lg:w-80 md:text-xl md:h-6 md:w-56 sm:h-6 sm:hidden vsm:hidden vsm:h-5 vsm:w-24 vsm:text-xs gap-6 flex  " >
                    <Link
                        to={"/landingPage"}
                        className=" flex justify-center items-center border p-2 shadow-md rounded-md" >
                        <BiHome className="text-green-600" />
                        HOME
                    </Link>
                    <Link
                        to={"/favourite"}
                        className=" flex justify-center items-center border p-2 shadow-md rounded-md" >
                        <MdOutlineFavorite className="text-red-600" />
                        FAVORITES
                    </Link>
                </div>
            </div>
            {/*  Logout */}
            <div
                className="flex gap-6 sm:hidden xs:hidden vsm:hidden "   >
                <div>
                    <button
                        onClick={logoutHandler}
                        className="flex gap-1 " >

                        {user ? <AiOutlineLogout
                            className="text-red-600 text-4xl shadow-md border border-white rounded lg:text-2xl md:text-xl " /> :
                            <HiLogin
                                className="text-red-600 text-4xl shadow-md border border-white rounded lg:text-2xl md:text-xl " />}

                        <div className="flex flex-col" >
                            {user ? `LOGOUT` : "LOGIN"}
                            <div className="text-xs text-green-900" >{user ? `Hii...${user.name.split(" ")[0]}` : null}</div>
                        </div>
                    </button>
                </div>
            </div>

            {/* Hanburger Button */}
            <div
                className="relative md:hidden lg:hidden xl:hidden hover:text-xl" >
                <button
                    className={isOpen ? "text-green-600" : "text-red-600"}
                    onClick={() => setIsOpen(!isOpen)} >
                    <GiHamburgerMenu />
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={isOpen ? " z-30 flex flex-col justify-center items-center gap-7  absolute right-0  h-64 w-screen top-11 bg-yellow-400" : "hidden"}>
                <div className="flex flex-col items-center justify-center gap-3" >
                    <Link
                        to={"/landingPage"}
                        className=" flex justify-center items-center border p-2 shadow-md rounded-md" >
                        <BiHome className="text-green-600" />
                        HOME
                    </Link>
                    <Link
                        to={"/favourite"}
                        className=" flex justify-center items-center border p-2 shadow-md rounded-md" >
                        <MdOutlineFavorite className="text-red-600" />
                        FAVOURITES
                    </Link>
                    <button
                        onClick={logoutHandler}
                        className="flex gap-1 " >
                        <AiOutlineLogout
                            className="text-slate-100 text-lg shadow-md border border-white rounded lg:text-2xl md:text-xl " />
                        <div className="flex flex-col" >
                            {user ? `LOGOUT` : "LOGIN"}
                            <div className="text-xs text-green-900" >{user ? `Hii...${user.name.split(" ")[0]}` : null}</div>
                        </div>
                    </button>
                </div>
            </div>
        </nav >
    )
}

export default Navbar;
