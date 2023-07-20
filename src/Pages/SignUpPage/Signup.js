import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { signUpUser } from '../../Redux/signupSlice';
import { toast } from 'react-toastify';


const Signup = () => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.signUpSlice);
    const Navigate = useNavigate();

    useEffect(() => {
        const check = localStorage.getItem("userToken")
        if (check) {
            Navigate("/landingPage");
        }
    }, []);

    const validationSchema = Yup.object().shape({
        fullname: Yup.string()
            .min(2, 'Full name must be at least 2 characters')
            .required('Full name is required'),
        email: Yup.string()
            .required('Email is required')
            .matches(
                /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                'Invalid email address'
            ),
        password: Yup.string()
            .min(7, 'Password must be at least 7 characters')
            .required('Password is required'),
        ctnumber: Yup.string()
            .matches(/^[0-9]{10}$/, 'Contact number must be a 10-digit number')
            .required('Contact number is required'),
    });


    const formik = useFormik({
        initialValues: { fullname: '', email: '', password: '', ctnumber: '' },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            dispatch(signUpUser(values));
            formik.resetForm();
            Navigate("/");
            toast.success('Signed Up Sucessfully');
        },
    });

    return (
        <div className='bg-amber-100 flex flex-col h-screen gap-5 items-center justify-center'>
            <form
                className='flex flex-col items-center justify-center w-full gap-5'
                onSubmit={formik.handleSubmit}
            >
                <span className='text-5xl text-red-600 text-shadow-2 font-extrabold vsm:text-lg sm:text-xl md:text-2xl border-2 border-gray-700 p-2 shadow-md rounded-t-2xl'>
                    Welcome to SIGNUP page
                </span>
                <TextField className='shadow-md'
                    id='fullname'
                    name='fullname'
                    label='Full name'
                    variant='outlined'
                    value={formik.values.fullname}
                    type='text'
                    onChange={formik.handleChange}
                    error={formik.touched.fullname && Boolean(formik.errors.fullname)}
                    helperText={formik.touched.fullname && formik.errors.fullname}
                />
                <TextField className='shadow-md'
                    id='email'
                    name='email'
                    label='Email'
                    variant='outlined'
                    value={formik.values.email}
                    type='email'
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField className='shadow-md'
                    id='password'
                    name='password'
                    label='Password'
                    type='password'
                    variant='outlined'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <TextField className='shadow-md'
                    id='ctnumber'
                    name='ctnumber'
                    label='Contact Number'
                    type='number'
                    variant='outlined'
                    value={formik.values.ctnumber}
                    onChange={formik.handleChange}
                    error={formik.touched.ctnumber && Boolean(formik.errors.ctnumber)}
                    helperText={formik.touched.ctnumber && formik.errors.ctnumber}
                />
                <button type='submit'
                    className='h-10 bg-white p-4 flex justify-center items-center rounded-b-2xl text-red-600 font-extrabold shadow-md border-2 border-black hover:text-xl'
                >
                    SIGNUP
                </button>
            </form>
            <button
                onClick={() => Navigate('/')}
                className='w-max h-10 bg-white p-4 flex justify-center items-center rounded-b-2xl text-red-600 shadow-md border-2 border-black font-extrabold hover:text-xl'
            >
                Back to Login
            </button>
            {error ? <p className='text-blue-700 font-bold' >*{error}</p> : null}
            {loading ? <p className='text-blue-700 font-bold' >{loading}</p> : null}
        </div>
    );
};

export default Signup;
