import React, { useEffect, useState, useMemo } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import jwtDecode from "jwt-decode";
import { MdOutlineFavorite } from 'react-icons/md';
import { AiOutlineDownload } from 'react-icons/ai';


export default function LandingPage() {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(0);
    const [recivedData, setRecivedData] = useState([]);

    const userId = useMemo(() => {
        const JWtoken = JSON.parse(localStorage.getItem("userToken"));
        if (JWtoken) {
            const decoded = jwtDecode(JWtoken.token);
            return decoded.userId
        }
    }, [navigate]);


    useEffect(() => {
        const check = localStorage.getItem('userToken');
        if (!check) {
            navigate('/');
            toast.error('Please LogIn First');
        }
    }, []);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://localhost:5050/images?page=${currentPage}`);
                setRecivedData([...recivedData, ...response.data.products]);
            } catch (error) {
                if (error) {
                    toast.error(`${error.response.data}`);
                }
            }
        }
        fetchData();
    }, [currentPage]);

    function loadMoreShots() {
        setCurrentPage(currentPage + 1);
    }

    async function setLike(id) {
        try {
            const likeRequest = { action: "setLike", userId: userId, prodId: id }
            const response = await axios.post("http://localhost:5050/favourite", likeRequest);
            if (response.data === "Image added to your favourites") {
                toast.success(`Image saved to your favourites`);
            }
        }
        catch (error) {
            if (error.response.data === "Image is already in your favourites") {
                toast.error(`Image is already in your favourites`);
            } else {
                console.log(error)
                toast.error(`Error occured in adding to Favourites`);
            }
        }
    };

    function setDownload(id) {

    };

    return (
        <div className="flex flex-wrap gap-4 justify-center items-center p-4">
            {recivedData && recivedData.map((val, ind) => (
                <div
                    key={ind}
                    className="group w-96 md:w-64  overflow-hidden relative flex flex-col flex-nowrap bg-white p-4 rounded-md shadow-md"
                >
                    <div className="flex-1">
                        <img
                            src={val.download_url}
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
                                src={val.download_url}
                                alt="Another Image"
                                className="w-full h-full relative object-cover rounded-md"
                            />
                            <div
                                className=" flex bottom-0 justify-between w-full absolute p-4">
                                <p
                                    className=" p-1 bg-black text-sm text-white rounded-md border border-white ">
                                    {val.author}
                                </p>
                                <div
                                    className="flex gap-1">
                                    <button
                                        onClick={() => setLike(val._id)}
                                        className=" text-white bg-blue-500 rounded-md p-2 border border-white">
                                        <MdOutlineFavorite />
                                    </button>
                                    <button
                                        onClick={() => setDownload(val._id)}
                                        className=" text-white bg-red-500 rounded-md p-2 border border-white">
                                        <AiOutlineDownload />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <button
                className=' text-black font-semibold bg-yellow-400 rounded-md p-2 border-2 border-black'
                onClick={loadMoreShots}>
                Load More Shots
            </button>
        </div>
    );
}
