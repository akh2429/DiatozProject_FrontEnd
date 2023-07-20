import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../Redux/loginSlice';
import { toast } from 'react-toastify';

const Login = () => {
    const Dispatch = useDispatch();
    const { loading = false, error = null, user = null } = useSelector((state) => state.loginSlice);
    const navigate = useNavigate();
    useEffect(() => {
        const check = localStorage.getItem("userToken")
        if (check) {
            navigate("/landingPage");
        }
    }, [navigate, loading, error, user]);

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email is required')
            .matches(
                /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                'Invalid email address'
            ),
        password: Yup.string()
            .min(7, 'Password must be at least 7 characters')
            .required('Password is required')
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            Dispatch(userLogin(values));
            formik.resetForm();
        },
    });

    return (
        <div
            className='bg-amber-100 flex flex-col h-screen gap-5 items-center justify-center'>
            <form
                className='flex flex-col items-center justify-center w-full gap-5'
                onSubmit={formik.handleSubmit}>
                <span
                    className='text-5xl text-red-600 text-shadow-2 font-extrabold vsm:text-lg sm:text-xl md:text-2xl border-2 border-gray-700 p-2 shadow-md rounded-t-2xl'>
                    Welcome to LOGIN page
                </span>
                <TextField
                    className='shadow-md'
                    id="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    value={formik.values.email}
                    type='email'
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    className='shadow-md'
                    id="password"
                    name="password"
                    label="Password"
                    type='password'
                    variant="outlined"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <button
                    type="submit"
                    className=' hover:text-xl h-10 bg-white p-4 flex justify-center items-center rounded-b-2xl text-red-600 font-extrabold shadow-md border-2 border-black'>
                    LOGIN
                </button>
            </form>
            <button
                onClick={() => navigate("/signup")}
                className=' hover:text-xl h-10 bg-white p-4 flex justify-center items-center rounded-b-2xl text-red-600 shadow-md border-2 border-black font-extrabold'>
                New User? Signup
            </button>
            {error ? <p className='text-blue-700 font-bold' >*{error}</p> : null}
            {loading ? <p className='text-blue-700 font-bold' >{loading}</p> : null}
        </div>
    );
};

export default Login;