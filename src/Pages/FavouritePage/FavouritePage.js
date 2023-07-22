import React, { useEffect, useMemo, useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AiFillDelete, AiOutlineDownload } from 'react-icons/ai';
import axios from 'axios';
import jwtDecode from "jwt-decode";

export default function FavouritePage() {
    const [recivedData, setRecivedData] = useState([]);
    const navigate = useNavigate();

    const userId = useMemo(() => {
        const JWtoken = JSON.parse(localStorage.getItem("userToken"));
        if (JWtoken) {
            const decoded = jwtDecode(JWtoken.token);
            return decoded.userId
        }
    }, [navigate]);

    useEffect(() => {
        const check = localStorage.getItem("userToken")
        if (!check) {
            navigate("/");
            toast.error('Please LogIn First');
        }
    }, []);

    useEffect(() => {
        async function fetchData() {
            try {
                const req = { userId: userId };
                const response = await axios.post("http://localhost:5050/favouriteData", req);
                setRecivedData(response.data.favourites);
            } catch (error) {
                if (error) {
                    toast.error(`${error.response.data}`);
                }
            }
        }
        fetchData();
    }, [navigate, setDelete]);



    async function setDelete(id) {
        try {
            const deleteRequest = { action: "setDelete", userId: userId, prodId: id }
            const response = await axios.post("http://localhost:5050/favourite", deleteRequest);
            if (response && response.data === " Shot Removed from favourites ") {
                toast.success("Shot removed from favourites")
            }
        }
        catch (error) {
            toast.error(`An error occured while deleting your shot`);
        }
    }

    function setDownload(id) {
        toast.error(`Download Functionality not available`);
    };
    return (
        <div className="flex flex-wrap gap-4 justify-center items-center p-4">
            {recivedData.length === 0 ? <div className='font-extrabold border-2 shadow-md bg-black text-white p-2 vsm:text-xs sm:text-sm md:text-sm ' > No Images Found !! Please add some</div> : null}
            {recivedData && recivedData.map((val, ind) => (
                <div
                    key={ind}
                    className="group w-96 md:w-64  overflow-hidden relative flex flex-col flex-nowrap bg-white p-4 rounded-md shadow-md"
                >
                    <div className="flex-1">
                        <img
                            src={val.imgId.download_url}
                            alt="Image"
                            className="top-0 left-0 h-full w-full object-cover ease-in-out z-0"
                        />
                    </div>
                    <div
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out absolute top-0 left-0 w-full h-full bg-white  rounded-md">
                        {/* Overlay content */}
                        <div
                            className="relative z-10 flex p-1 ">
                            <img
                                src={val.imgId.download_url}
                                alt="Another Image"
                                className="w-full h-full relative object-cover rounded-md"
                            />
                            <div
                                className=" flex bottom-0 justify-between w-full absolute p-4">
                                <p
                                    className=" p-1 bg-black text-sm text-white rounded-md border border-white ">
                                    {val.imgId.author}
                                </p>
                                <div
                                    className="flex gap-1">
                                    <button
                                        onClick={() => setDelete(val.imgId._id)}
                                        className=" text-white bg-blue-500 rounded-md p-2 border border-white">
                                        <AiFillDelete />
                                    </button>
                                    <button
                                        onClick={() => setDownload(val.imgId._id)}
                                        className=" text-white bg-red-500 rounded-md p-2 border border-white">
                                        <AiOutlineDownload />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}
