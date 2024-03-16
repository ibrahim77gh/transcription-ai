'use client';
import React, {useState} from 'react'
import Image from 'next/image'
import logo from "@/app/assets/ned-logo.png"
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch } from '@/redux/hooks';
import { useLoginMutation } from '@/redux/features/authApiSlice';
import Spinner from '@/components/Spinner';
import toast from 'react-hot-toast';
import { setAuth } from '@/redux/features/authSlice';

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]+$/,
        'Password must contain at least one uppercase letter, one lowercase letter, and one number'
        )
        .required('Password is required'),
});


export default function Page () {
    
    const router = useRouter();
    const [login, { isLoading }] = useLoginMutation();
    const dispath = useAppDispatch()
    
    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema,
        onSubmit: async (values) => {
          login(values).unwrap().then(() => {
            dispath(setAuth())
            toast.success("Logged in successfully");
            router.push('/transcription')
          })
          .catch((error) => {
            console.log(error)
            if (error.data) {
              // Iterate through error fields and display corresponding toast messages
              Object.keys(error.data).forEach((field) => {
                const errorMessage = error.data[field];
        
                toast.error(errorMessage);
              });
            } else {
              // Display a generic error message
              console.log(error)
              toast.error('Invalid Email or Password!');
            }
          })
        },
      });


    return (
        <>
            <section class="bg-gray-50 dark:bg-white">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <Image class="w-32 h-32 mr-2" src={logo} alt="logo">
                        </Image>
                    </a>
                    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Login
                            </h1>
                            <form class="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit} action="#">
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email"
                                        name="email"
                                        id="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange} 
                                        class={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${formik.errors.email ? 'border-red-500' : ''}`}
                                        placeholder="name@company.com" required="">
                                    </input>
                                    {formik.errors.email && (
                                        <p class="text-sm text-red-500">{formik.errors.email}</p>
                                    )}
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password"
                                        name="password"
                                        id="password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        placeholder="••••••••" 
                                        class={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${formik.errors.password ? 'border-red-500' : ''}`}
                                        required="">
                                    </input>
                                    {formik.errors.password && (
                                        <p class="text-sm text-red-500">{formik.errors.password}</p>
                                    )}
                                </div>
                                <button disabled={isLoading} type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                    {isLoading ? <Spinner/> : 'Log in'}
                                </button>
                                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don`t have an account? <Link href="/auth/sign-up" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up here</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}