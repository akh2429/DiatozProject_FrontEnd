import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const check = localStorage.getItem("userToken")
        if (!check) {
            navigate("/");
            toast.error('Please LogIn First');
        }
    }, []);

    return (
        <div>
            Landing Page
        </div>
    )
};


